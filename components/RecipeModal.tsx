import React from 'react';
import { Recipe } from '../lib/recipes';

interface RecipeModalProps {
  recipe: Recipe;
  filename: string;
  type: string;
  githubRepo: string;
}

export default function RecipeModal({ recipe, filename, type, githubRepo }: RecipeModalProps) {
  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  const recipeSlug = slugify(recipe.title);

  const deleteRecipe = () => {
    const githubUrl = `https://github.com/${githubRepo}/delete/main/src/_data/recipes/${type}/${filename}.json`;
    window.open(githubUrl, '_blank');
  };

  return (
    <>
      {/* Portfolio Item */}
      <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item mx-auto" data-toggle="modal" data-target={`#portfolio${recipeSlug}`}>
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={recipe.image} alt={recipe.title} />
        </div>
      </div>

      {/* Modal */}
      <div 
        className="portfolio-modal modal fade" 
        id={`portfolio${recipeSlug}`} 
        tabIndex={-1} 
        role="dialog"
        aria-labelledby={`portfolio${recipeSlug}Label`} 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i className="fas fa-times"></i></span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id={`portfolio${recipeSlug}Label`}
                    >
                      {recipe.title}
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-egg"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={recipe.image} alt={recipe.title} />
                    <p className="mb-5" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
                    {recipe.link && (
                      <button className="btn btn-primary">
                        <i className="fas fa-external-link-alt fa-fw"></i>
                        <a target="_blank" href={recipe.link} rel="noopener noreferrer">Link to recipe</a>
                      </button>
                    )}
                    <button 
                      className="btn btn-danger" 
                      id={`deleteRecipe${recipeSlug}`}
                      onClick={deleteRecipe}
                    >
                      <i className="fas fa-trash-alt fa-fw"></i> Delete Recipe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-item {
          position: relative;
          overflow: hidden;
        }

        .portfolio-item img {
          transition: transform 0.3s ease;
        }

        .portfolio-item:hover img {
          transform: scale(1.1);
        }

        .portfolio-item-caption {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-item:hover .portfolio-item-caption {
          opacity: 1;
        }

        .portfolio-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .portfolio-modal img {
          width: auto;
          height: auto;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}