import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable');

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null
        promise: Promise<typeof mongoose> | null
    }
}

let cached = global.mongooseCache || (global.mongooseCache = { conn: null, promise: null });

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e: any) {
        cached.promise = null;
        if (e?.code === 'ENOTFOUND' || e?.message?.includes('querySrv')) {
            console.error('MongoDB SRV Lookup failed (ENOTFOUND). Please check if your MongoDB Atlas cluster is active/resumed and that the connection string in .env is correct.');
        } else {
            console.error('MongoDB connection error: ' + (e instanceof Error ? e.message : String(e)));
        }
        throw e;
    }

    console.info('Connected to MongoDB');
    return cached.conn;
}
