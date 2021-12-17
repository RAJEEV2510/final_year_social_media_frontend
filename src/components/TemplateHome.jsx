import React from 'react'
import  '../../public/img/about-icon.png'
function TemplateHome() {
    return (
       <div>
         Rajeev
        <nav class="nav">
          <div class="burger">
            <div class="burger__patty"></div>
          </div>

          <ul class="nav__list">
            <li class="nav__item">
              <a href="#1" class="nav__link c-blue"><img src="img/home-icon.png" alt=""/></a>
            </li>
            <li class="nav__item">
              <a href="#2" class="nav__link c-yellow scrolly"><img src="img/about-icon.png" alt=""/></a>
            </li>
            <li class="nav__item">
              <a href="#3" class="nav__link c-red"><img src="img/projects-icon.png" alt=""/></a>
            </li>
            <li class="nav__item">
              <a href="#4" class="nav__link c-green"><img src="img/contact-icon.png" alt=""/></a>
            </li>
          </ul>
        </nav>

        <section class="panel b-blue" id="1">
          <article class="panel__wrapper">
            <div class="panel__content">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <div class="home-content">
                      <div class="home-heading">
                        <h1><em>Stak</em> HTML CSS</h1>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="home-box-content">
                            <div class="left-text">
                              <h4>New <em>Stacked</em> Template</h4>
                              <p>Stacked HTML CSS Template is provided by TemplateMo website. You can edit and use this template for any purpose. Please mention your friends about our website. Thank you.</p>
                              <div class="primary-button">
                                <a href="#2">Discover More</a>
                              </div>
                            </div>
                            <div class="right-image">
                              <img src="img/right-home-image.png" alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section class="panel b-yellow" id="2">
          <article class="panel__wrapper">
            <div class="panel__content">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <div class="about-content">
                      <div class="heading">
                        <h4>About us</h4>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="about-box-content">
                            <img src="img/about-image.png" alt=""/>
                          </div>
                        </div>
                        <div class="col-md-7 col-md-offset-5">
                          <div class="about-box-text">
                            <h4>Curabitur varius sapien</h4>
                            <p>Please feel free to contact us if you have any question or suggestion about our free templates. Thank you. Template redistribution is <strong>NOT allowed</strong>.</p>
                            <div class="primary-button">
                              <a href="#3">Discover More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section class="panel b-red" id="3">
          <article class="panel__wrapper">
            <div class="panel__content">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <div class="projects-content">
                      <div class="heading">
                        <h4>Recent Projects</h4>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="owl-carousel owl-theme projects-container">
                            <div>
                              <div class="project-item">
                                <a href="img/project-item-01.jpg" data-lightbox="image-1"><img src="img/project-item-01.jpg" alt=""/></a>
                                <div class="text-content">
                                  <h4>Work Smart</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div class="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="project-item">
                                <a href="img/project-item-02.jpg" data-lightbox="image-1"><img src="img/project-item-02.jpg" alt=""/></a>
                                <div class="text-content">
                                  <h4>Creative Idea</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div class="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="project-item">
                                <a href="img/project-item-03.jpg" data-lightbox="image-1"><img src="img/project-item-03.jpg" alt=""/></a>
                                <div class="text-content">
                                  <h4>New Thought</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div class="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="project-item">
                                <a href="img/project-item-04.jpg" data-lightbox="image-1"><img src="img/project-item-04.jpg" alt=""/></a>
                                <div class="text-content">
                                  <h4>Next Moment</h4>
                                  <p>Lorem ipsum dolor sit amet, adipis scing elit etiam sit amet ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div class="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="project-item">
                                <a href="img/project-item-05.jpg" data-lightbox="image-1"><img src="img/project-item-05.jpg" alt=""/></a>
                                <div class="text-content">
                                  <h4>Artwork</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div class="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="project-item">
                                <a href="img/project-item-06.jpg" data-lightbox="image-1"><img src="img/project-item-06.jpg" alt=""/></a>
                                <div class="text-content">
                                  <h4>Sixth Box</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div class="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="project-item">
                                <a href="img/project-item-07.jpg" data-lightbox="image-1"><img src="img/project-item-07.jpg" alt=""/></a>
                                <div class="text-content">
                                  <h4>Item #7</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div class="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section class="panel b-green" id="4">
          <article class="panel__wrapper">
            <div class="panel__content">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <div class="contact-content">
                      <div class="heading">
                        <h4>Contact us</h4>
                      </div>
                      <div class="row">
                        <div class="col-md-8">
                          <div class="contat-form">
                            <form id="contact" action="" method="post">
                              <fieldset>
                                <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required=""/>
                              </fieldset>
                              <fieldset>
                                <input name="email" type="email" class="form-control" id="email" placeholder="Email" required=""/>
                              </fieldset>
                              <fieldset>
                                <textarea name="message" rows="6" class="form-control" id="message" placeholder="Message" required=""></textarea>
                              </fieldset>
                              <fieldset>
                                <button type="submit" id="form-submit" class="btn">Send Message</button>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="more-info">
                         
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="footer">
                      <p>Copyright &copy; 2020 Your Company 
                      | Design: TemplateMo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      
    


        </div>
    )
}

export default TemplateHome
