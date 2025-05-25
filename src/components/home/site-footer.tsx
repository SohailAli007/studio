
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'; // Added Linkedin

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 text-center text-foreground/80 border-t"> {/* Changed text-muted-foreground to text-foreground/80 */}
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
        <p>© {currentYear !== null ? currentYear : "..."} Gastronomic Getaway. All rights reserved.</p>
      </div>
    </footer>
  );
}
