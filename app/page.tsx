"use client";

import { useState } from "react";
import {
  LoadingScreen,
  NavBar,
  HeroSection,
  SelectedWorks,
  JournalSection,
  Explorations,
  StatsSection,
  FooterSection,
} from "@/components/common";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-bg min-h-screen">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <NavBar />
          <main>
            <HeroSection />
            <SelectedWorks />
            <JournalSection />
            <Explorations />
            <StatsSection />
            <FooterSection />
          </main>
        </>
      )}
    </div>
  );
}
