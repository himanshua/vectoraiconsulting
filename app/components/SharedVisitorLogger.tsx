"use client";
import { useEffect } from "react";

const SHARED_ENDPOINT = "https://aheadterra.com/api/visitors";

const getNavigatorInfo = () => {
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    userAgentData?: {
      model?: string;
      platform?: string;
      brands?: { brand?: string; version?: string }[];
    };
  };
  return nav;
};

async function sendSharedVisitor() {
  if (typeof window === "undefined" || !navigator) return;

  const nav = getNavigatorInfo();
  const uaData = nav.userAgentData;
  const deviceInfo = uaData
    ? {
        model: uaData.model || null,
        platform: uaData.platform || null,
        brands: uaData.brands?.map((b) => ({
          brand: b.brand,
          version: b.version,
        })),
      }
    : null;

  const payload = {
    ua: navigator.userAgent,
    uaData: deviceInfo,
    platform: navigator.platform,
    languages: navigator.languages ? Array.from(navigator.languages) : null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenSize: [window.innerWidth, window.innerHeight],
    hwConcurrency: navigator.hardwareConcurrency || null,
    deviceMemory: nav.deviceMemory ?? null,
    touchPoints: navigator.maxTouchPoints ?? null,
    meta: { source: "vectoraiconsulting" },
    createdAt: new Date().toISOString(),
  };

  await fetch(SHARED_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export default function SharedVisitorLogger() {
  useEffect(() => {
    sendSharedVisitor().catch((error) => {
      console.warn("Shared visitor tracking failed", error);
    });
  }, []);

  return null;
}