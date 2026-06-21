import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft, Share2, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import ContactUs from "@/components/sections/ContactUs";
import { Badge } from "@/components/ui/Badge";
import { articles } from "@/data/blog";

const DummyContentJSX = () => (
  <>
    <h2>Introduction</h2>
    <p>The landscape of international education is constantly evolving, and 2026 brings significant shifts that every prospective student needs to know. Whether you are aiming for Australia, Canada, or the UK, understanding these changes is critical to a successful application.</p>
    
    <h3>Financial Requirements Have Increased</h3>
    <p>One of the most notable changes across all major study destinations is the increase in the financial capacity requirement. Governments want to ensure that international students can comfortably support themselves without relying heavily on part-time work.</p>
    
    <ul>
      <li><strong>Australia:</strong> The required savings threshold has increased by 15%.</li>
      <li><strong>Canada:</strong> The Guaranteed Investment Certificate (GIC) requirement has doubled.</li>
      <li><strong>UK:</strong> Maintenance funds must now be held for 35 days instead of 28 days.</li>
    </ul>

    <blockquote className="my-12 pl-6 md:pl-8 border-l-4 border-accent not-prose">
      <p className="text-xl md:text-2xl font-serif text-slate-800 italic leading-snug mb-6">
        "Preparation is key. Students who start their financial planning 6-8 months in advance have a 95% higher visa success rate."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
          <User size={18} className="text-slate-400" />
        </div>
        <div>
          <span className="block font-bold text-slate-900 uppercase tracking-wider text-xs">Everest Migration Expert</span>
          <span className="block text-slate-500 text-xs font-medium">Senior Consultant</span>
        </div>
      </div>
    </blockquote>

    <h3>Stricter Language Requirements</h3>
    <p>To ensure students can thrive in their academic environments, the minimum English language proficiency scores have been marginally raised. For example, a standard IELTS requirement of 6.0 has been adjusted to 6.5 for many undergraduate programs, while postgraduate programs may require a 7.0 overall.</p>

    <h2>What Should You Do Next?</h2>
    <ol className="list-decimal pl-6 space-y-4 mb-8 text-slate-600 text-[1.125rem] md:text-[1.25rem]">
      <li><strong>Book a Consultation:</strong> Speak with a registered migration agent to understand how these changes affect your specific profile.</li>
      <li><strong>Prepare Finances Early:</strong> Begin consolidating your funds to meet the new, stricter timeline requirements.</li>
      <li><strong>Focus on English Proficiency:</strong> Consider enrolling in preparation classes to ensure you meet the elevated IELTS/PTE standards.</li>
    </ol>
    
    <p>We are here to help you navigate these complex changes. Reach out to the Everest team today to secure your future.</p>
  </>
);

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Get 3 related articles (just the first 3 for this mockup, excluding current)
  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <main className="bg-slate-50 min-h-screen pt-24 pb-0">
      <article className="pt-8 md:pt-16 pb-20 border-b border-slate-200 bg-white">
        <Container className="max-w-7xl">
          
          {/* Header Row (Spans full width above split) */}
          <div className="mb-12">
            <Link href="/blog" className="inline-flex items-center text-accent font-semibold mb-6 hover:-translate-x-2 transition-transform duration-300">
              <ChevronLeft size={20} className="mr-1" /> Back to Articles
            </Link>
            
            <div className="mb-6 flex">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-none px-4 py-1 text-sm">
                {article.category}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight max-w-4xl">
              {article.title}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Column (Sticky Image & Meta) */}
            <div className="lg:w-5/12 w-full shrink-0 lg:sticky lg:top-32">
              
              <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <User size={16} className="text-accent" />
                  </div>
                  <span className="text-slate-800 font-bold">{article.author}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
                <div className="flex items-center gap-2"><Calendar size={18} /> {article.date}</div>
              </div>
              
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-xl shadow-slate-900/10 border-4 border-white bg-slate-100">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Share Section (Moved to left sidebar) */}
              <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col gap-4">
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-widest flex items-center gap-2">
                  <Share2 size={16} /> Share Article
                </h4>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (Article Content) */}
            <div className="lg:w-7/12 w-full lg:pb-32">
              <div className="flex items-center gap-2 text-slate-500 font-medium mb-10 pb-10 border-b border-slate-200">
                <Clock size={18} className="text-accent" /> <span className="text-slate-800">{article.readTime}</span>
              </div>
              
              <div className="prose prose-lg md:prose-xl prose-slate max-w-none 
                prose-headings:font-extrabold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:leading-tight
                prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10
                prose-p:text-slate-600 prose-p:text-[1.125rem] prose-p:leading-[1.85] prose-p:mb-8
                prose-a:text-accent prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:text-accent/80 transition-colors
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-ul:space-y-3
                prose-li:text-slate-600 prose-li:text-[1.125rem] prose-li:leading-relaxed
                marker:text-accent marker:font-bold marker:text-xl
                [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:text-6xl [&>p:first-of-type]:first-letter:font-extrabold [&>p:first-of-type]:first-letter:text-slate-900 [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:mt-1 [&>p:first-of-type]:first-letter:leading-[0.8]
              ">
                {/* Render proper JSX instead of regex parsed markdown */}
                <DummyContentJSX />
              </div>
            </div>
            
          </div>
        </Container>
      </article>

      {/* Related Articles */}
      <section className="bg-white py-20 border-t border-slate-100">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary">Related Articles</h2>
            <Link href="/blog" className="hidden sm:flex items-center text-accent font-bold hover:translate-x-1 transition-transform">
              View All <ChevronLeft size={20} className="ml-1 rotate-180" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relArticle) => (
              <Link key={relArticle.id} href={`/blog/${relArticle.slug}`} className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={relArticle.image} alt={relArticle.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{relArticle.category}</div>
                  <h3 className="font-bold text-primary text-lg mb-3 line-clamp-2 group-hover:text-accent transition-colors">{relArticle.title}</h3>
                  <div className="text-slate-500 text-sm flex items-center gap-2">
                    <Calendar size={14} /> {relArticle.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center justify-center h-12 px-8 rounded-full font-bold bg-slate-100 text-primary w-full">
              View All Articles
            </Link>
          </div>
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
