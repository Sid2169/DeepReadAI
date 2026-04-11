'use client';

import React from 'react';
import { voiceCategories, voiceOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { VoiceSelectorProps } from '@/types';

const VoiceSelector = ({ value, onChange, disabled, className }: VoiceSelectorProps) => {
    return (
        <div className={cn('space-y-6', className)}>
            <RadioGroup
                value={value}
                onValueChange={onChange}
                disabled={disabled}
                className="space-y-6"
            >
                {/* Male Voices */}
                <div className="space-y-3">
                    <h4
                        style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "var(--dr-teal)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Male Voices
                    </h4>
                    <div className="voice-selector-options">
                        {voiceCategories.male.map((voiceId) => {
                            const voice = voiceOptions[voiceId as keyof typeof voiceOptions];
                            const isSelected = value === voiceId;
                            return (
                                <Label
                                    key={voiceId}
                                    className={cn(
                                        'voice-selector-option',
                                        isSelected ? 'voice-selector-option-selected' : '',
                                        disabled && 'voice-selector-option-disabled'
                                    )}
                                >
                                    <RadioGroupItem value={voiceId} id={voiceId} className="sr-only" />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <div
                                                style={{
                                                    width: 14,
                                                    height: 14,
                                                    borderRadius: "50%",
                                                    border: `1.5px solid ${isSelected ? "var(--dr-teal)" : "var(--dr-border-bright)"}`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                    transition: "border-color 0.2s",
                                                }}
                                            >
                                                {isSelected && (
                                                    <div
                                                        style={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: "50%",
                                                            background: "var(--dr-teal)",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            <span
                                                style={{
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    color: isSelected ? "var(--dr-teal-bright)" : "var(--dr-text-primary)",
                                                    transition: "color 0.2s",
                                                }}
                                            >
                                                {voice.name}
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: "0.75rem",
                                                color: "var(--dr-text-muted)",
                                                lineHeight: 1.4,
                                                margin: 0,
                                            }}
                                        >
                                            {voice.description}
                                        </p>
                                    </div>
                                </Label>
                            );
                        })}
                    </div>
                </div>

                {/* Female Voices */}
                <div className="space-y-3">
                    <h4
                        style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "var(--dr-teal)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Female Voices
                    </h4>
                    <div className="voice-selector-options">
                        {voiceCategories.female.map((voiceId) => {
                            const voice = voiceOptions[voiceId as keyof typeof voiceOptions];
                            const isSelected = value === voiceId;
                            return (
                                <Label
                                    key={voiceId}
                                    className={cn(
                                        'voice-selector-option',
                                        isSelected ? 'voice-selector-option-selected' : '',
                                        disabled && 'voice-selector-option-disabled'
                                    )}
                                >
                                    <RadioGroupItem value={voiceId} id={voiceId} className="sr-only" />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <div
                                                style={{
                                                    width: 14,
                                                    height: 14,
                                                    borderRadius: "50%",
                                                    border: `1.5px solid ${isSelected ? "var(--dr-teal)" : "var(--dr-border-bright)"}`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                    transition: "border-color 0.2s",
                                                }}
                                            >
                                                {isSelected && (
                                                    <div
                                                        style={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: "50%",
                                                            background: "var(--dr-teal)",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            <span
                                                style={{
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    color: isSelected ? "var(--dr-teal-bright)" : "var(--dr-text-primary)",
                                                    transition: "color 0.2s",
                                                }}
                                            >
                                                {voice.name}
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: "0.75rem",
                                                color: "var(--dr-text-muted)",
                                                lineHeight: 1.4,
                                                margin: 0,
                                            }}
                                        >
                                            {voice.description}
                                        </p>
                                    </div>
                                </Label>
                            );
                        })}
                    </div>
                </div>
            </RadioGroup>
        </div>
    );
};

export default VoiceSelector;