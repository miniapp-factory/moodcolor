"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MoodColor() {
  const [mood, setMood] = useState<string>("");
  const [color, setColor] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);

  const handleGenerate = () => {
    const moodLower = mood.trim().toLowerCase();
    let c: string | null = null;
    let d: string | null = null;
    switch (moodLower) {
      case "happy":
        c = "#FFD700";
        d = "Bright golden hue reflecting joy.";
        break;
      case "sad":
        c = "#1E90FF";
        d = "Calm blue tone representing sadness.";
        break;
      case "angry":
        c = "#FF4500";
        d = "Vibrant red-orange indicating anger.";
        break;
      case "calm":
        c = "#32CD32";
        d = "Fresh green symbolizing calmness.";
        break;
      case "excited":
        c = "#FF8C00";
        d = "Warm orange evoking excitement.";
        break;
      default:
        c = null;
        d = null;
    }
    setColor(c);
    setDesc(d);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Convert Mood to Color</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          placeholder="Enter your mood (e.g., happy, sad)"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <Button onClick={handleGenerate}>Generate</Button>
        {color && (
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-24 h-24 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: color }}
            />
            <span className="text-lg font-medium">{color}</span>
            <span className="text-sm text-muted-foreground">{desc}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
