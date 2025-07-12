'use client'

import React from 'react';
import { useScroll } from '../hooks/useScroll';
import { handleSmoothScroll } from '../utils/scrollUtils';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  githubRepo?: string;
}

export default function Layout({ children, title = "Missed Steak", githubRepo = "" }: LayoutProps) {
  const { isNavbarShrunk } = useScroll();

  return (
    <>

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg bg-secondary text-uppercase fixed-top ${isNavbarShrunk ? 'navbar-shrink' : ''}`} id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top" onClick={(e) => handleSmoothScroll(e, '#page-top')}>Missed Steak</a>
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Savory</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>Sweet</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a 
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#"
                  data-toggle="modal"
                  data-target="#newRecipeModal"
                >
                  <i className="fas fa-plus mr-1"></i>New Recipe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">La peque</h4>
              <p className="lead mb-0">
                Patagonia
                <br />
                Argentina
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Yo en otros lugares</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/magalipujoll/">
                <i className="fab fa-fw fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/magalipujol">
                <i className="fab fa-fw fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* New Recipe Modal */}
      <NewRecipeModal githubRepo={githubRepo} />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}

function NewRecipeModal({ githubRepo }: { githubRepo: string }) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;

    const handleSubmit = () => {
      const title = (document.getElementById('recipeTitle') as HTMLInputElement)?.value;
      const image = (document.getElementById('recipeImage') as HTMLInputElement)?.value;
      const instructions = (document.getElementById('recipeInstructions') as HTMLTextAreaElement)?.value;
      const link = (document.getElementById('recipeLink') as HTMLInputElement)?.value;
      const type = (document.querySelector('input[name="recipeType"]:checked') as HTMLInputElement)?.value;

      if (!title || !image || !instructions || !type) return;

      const formattedInstructions = instructions.replace(/\n/g, '<br>');

      const recipeData = {
        title: title,
        image: image,
        instructions: formattedInstructions,
        link: link,
      };

      const jsonData = JSON.stringify(recipeData, null, 2);
      const encodedData = encodeURIComponent(jsonData);
      const filename = title.toLowerCase().replace(/\s+/g, '-') + '.json';
      const githubUrl = `https://github.com/${githubRepo}/new/main/lib/recipes/${type}?filename=${filename}.json&value=${encodedData}`;

      window.open(githubUrl, '_blank');
    };

    const submitButton = document.getElementById('submitRecipe');
    if (submitButton) {
      submitButton.addEventListener('click', handleSubmit);
      return () => submitButton.removeEventListener('click', handleSubmit);
    }
  }, [githubRepo, isClient]);

  return (
    <div className="portfolio-modal modal fade" id="newRecipeModal" tabIndex={-1} role="dialog" aria-labelledby="newRecipeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i className="fas fa-times"></i></span>
          </button>
          <div className="modal-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="newRecipeModalLabel">Add New Recipe</h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-utensils"></i></div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <form id="recipeForm" className="mb-5">
                    <div className="form-group">
                      <label htmlFor="recipeTitle">Recipe Title</label>
                      <input type="text" className="form-control" id="recipeTitle" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipeImage">Image URL</label>
                      <input type="url" className="form-control" id="recipeImage" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipeInstructions">Instructions</label>
                      <textarea className="form-control" id="recipeInstructions" rows={5} required></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipeLink">Original Recipe Link (optional)</label>
                      <input type="url" className="form-control" id="recipeLink" />
                    </div>
                    <div className="form-group">
                      <label>Recipe Type</label>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="recipeType" id="typeSavory" value="savory" defaultChecked />
                        <label className="form-check-label" htmlFor="typeSavory">Savory</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="recipeType" id="typeSweet" value="sweet" />
                        <label className="form-check-label" htmlFor="typeSweet">Sweet</label>
                      </div>
                    </div>
                    <button type="button" id="submitRecipe" className="btn btn-primary">
                      <i className="fas fa-upload mr-1"></i>Submit Recipe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}