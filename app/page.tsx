import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UploadSection } from '@/components/UploadSection';
import { Features } from '@/components/Features';
import { CreditBalance } from '@/components/CreditBalance';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Hero />
        <CreditBalance />
        <UploadSection />
        <Features />
      </main>
    </div>
  );
}
