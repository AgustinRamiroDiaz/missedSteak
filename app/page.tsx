'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { RecipesByCategory } from '../lib/types';

const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
const RecipeModal = dynamic(() => import('../components/RecipeModal'), { ssr: false });

export default function Home() {
  const [recipes, setRecipes] = useState<RecipesByCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const githubRepo = process.env.NEXT_PUBLIC_GITHUB_USERNAME_SLASH_REPO || 'magalipujol/missedSteak';

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const response = await fetch('/recipes.json');
        if (!response.ok) {
          throw new Error('Failed to load recipes');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error loading recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading recipes...</p>
        </div>
      </div>
    );
  }

  if (!recipes) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="text-danger mb-4">Failed to load recipes</h2>
          <p className="text-muted">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }
  
  return (
    <Layout title="Missed Steak - Vegetarian Recipes" githubRepo={githubRepo}>
      {/* Masthead */}
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <Image className="masthead-avatar mb-5" src="/assets/img/salad.png" alt="Vegetarian Salad" width={200} height={200} />
          <h1 className="masthead-heading text-uppercase mb-0">vegetarian recipes</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-utensils"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">
            This recipes will show you that becoming a vegetarian is not a missed steak
          </p>
        </div>
      </header>

      {/* Basics Section */}
      <section className="page-section portfolio" id="basics" style={{ backgroundColor: '#8c271e' }}>
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Basics</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-leaf"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {recipes.basics.map((item, index) => (
              <RecipeModal
                key={index}
                recipe={item.recipe}
                filename={item.filename}
                type="basics"
                githubRepo={githubRepo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Savory</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-carrot"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {recipes.savory.map((item, index) => (
              <RecipeModal
                key={index}
                recipe={item.recipe}
                filename={item.filename}
                type="savory"
                githubRepo={githubRepo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">Sweet</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-candy-cane"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {recipes.sweet.map((item, index) => (
              <RecipeModal
                key={index}
                recipe={item.recipe}
                filename={item.filename}
                type="sweet"
                githubRepo={githubRepo}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}