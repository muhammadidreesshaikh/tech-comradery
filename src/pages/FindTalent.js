import React, { useState } from "react";
import Slider from "../shared/Slider";
import "../assets/scss/find-talent.scss";

function FindTalent() {

  const [tab, setTab] = useState(1);

  return (
    <div>
      <Slider />

      <div className="find-talent">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="img-work">
                <span className="verticaltxt">Expert</span>
                <img src={require('./../assets/img/img-work.jpg')} />
              </div>
            </div>
            <div className="col-md-8 work_cntnt">
              <h1 className="main_hdng">Up your work game, <span className="primary-color">it’s free.</span></h1>
              <p className="">
                <span className="primary-color">No cost to join.</span><br />
                Register and browse professionals, explore projects, or even book a consultation.
              </p>
              <p className="">
                <span className="primary-color">Post a job and hire top talent.</span><br />
                Finding talent doesn’t have to be a chore. Post a job or we can search for you!
              </p>
              <p className="">
                <span className="primary-color">Work with the best—without breaking the bank.</span><br />
                Tech Comradery makes it affordable to up your work and take advantage of low transaction rates.
              </p>

              <button className="btn btn-cstm green">Sign up for free</button>
              <button className="btn btn-cstm white">Learn how to hire</button>
            </div>

          </div>
        </div>
      </div>

      <section className="sec-category">
        <div className="container">
          <h1 className="main_hdng text-center"><span className="normal">Browse talent by</span> Category</h1>
          <h5 className="hdng_title text-center">Looking for work? <span className="color-primary">Browse jobs</span></h5>
          <div className="row cate_row">
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Development & IT</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Design & Creative</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Sales & Marketing</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Writing & Translation</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Admin & Customer Support</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Finance & Accounting</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Engineering & Architecture</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="bx-category">
                <h4>Legal</h4>
                <div className="row">
                  <div className="col-6">4.85/5</div>
                  <div className="col-6 text-end">1853 skills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-companygood">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="main_hdng"><span className="primary-color title d-block">Enterprise Suite</span> This is how good companies find good company.</h1>
              <p className="">
                Register and browse professionals, explore projects, or even book a consultation.
              </p>

              <button className="btn btn-cstm green">Learn More</button>

              <ul className="ul_company">
                <li><img src={require('./../assets/img/icon-setting.png')} /><span className="txt"> Access expert talent to fill your skill gaps</span> </li>
                <li><img src={require('./../assets/img/icon-empwiin.png')} /><span className="txt">Control your workflow: hire, classify and pay your talent</span></li>
                <li><img src={require('./../assets/img/icon-headph.png')} /><span className="txt">Partner with Tech Comradery for end-to-end support</span></li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="img-work">
                <img src={require('./../assets/img/img-company.jpg')} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-talent">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto">
              <h1 className="main_hdng">Find talent your way</h1>
              <p>
                Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 m-auto">
              <div className="row bx-talent-row">
                <div className="col-md-4">
                  <a href="javascript:;" className="bx-talent">
                    <h4>Post a job and hire a pro</h4>
                    <span className="bottomtitle">Talent Marketplace</span>
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="javascript:;" className="bx-talent">
                    <h4>Browse and buy projects</h4>
                    <span className="bottomtitle">Talent Marketplace</span>
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="javascript:;" className="bx-talent">
                    <h4>Let us help you find the right talent</h4>
                    <span className="bottomtitle">Talent Marketplace</span>
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-worktalent">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="img-work">
                <img src={require('./../assets/img/img-work2.jpg')} />
              </div>
            </div>
            <div className="col-md-8 work_cntnt">
              <h1 className="main_hdng"><span className="primary-color title d-block">For Talent</span> Find Great Work</h1>
              <p>
                Meet clients you’re excited to work with and take your career or business to new heights.
              </p>
              <ul>
                <li>Find opportunities for every stage of your freelance career</li>
                <li>Control when, where, and how you work</li>
                <li>Explore different ways to earn</li>
              </ul>

              <button className="btn btn-cstm green">Find Opportunities</button>
            </div>

          </div>
        </div>
      </section>

      <section className="sec-tabs">
        <div className="container">
          <div className="row justify-content-center">

            <div class="tab row">
              <div className="col-3 px-0">
                <a className="tablinks" onClick={() => setTab(1)}>Top Skills</a>
                <div className="seprator"></div>
              </div>

              <div className="col-3 px-0">
                <a className="tablinks" onClick={() => setTab(2)}>Trending Skills</a>
                <div className="seprator"></div>
              </div>

              <div className="col-3 px-0">
                <a className="tablinks" onClick={() => setTab(3)}>Top Skills in US</a>
                <div className="seprator"></div>
              </div>

              <div className="col-3 px-0">
                <a className="tablinks" onClick={() => setTab(4)}>Project Catalog</a>
                <div className="seprator"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="sec-tabs-content">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-12 ">
              {
                tab == 1 ?
                  <div class="tabcontent">
                    <div className="row">
                      <div className="col-3">
                        <ul>
                          <li><a href="#">Data Entry Specialists</a></li>
                          <li><a href="#">Video Editors</a></li>
                          <li><a href="#">Data Analyst</a></li>
                          <li><a href="#">Shopify Developer</a></li>
                          <li><a href="#">Ruby on Rails Developer</a></li>
                          <li><a href="#">Android Developer</a></li>
                          <li><a href="#">Bookkeeper</a></li>
                          <li><a href="#">Content Writer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Copywriter</a></li>
                          <li><a href="#">Database Administrator</a></li>
                          <li><a href="#">Data Scientist</a></li>
                          <li><a href="#">Front-End Developer</a></li>
                          <li><a href="#">Game Developer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Java Developer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">JavaScript Developer</a></li>
                          <li><a href="#">Logo Designer</a></li>
                          <li><a href="#">Mobile App Developer</a></li>
                          <li><a href="#">PHP Developer</a></li>
                          <li><a href="#">Python Developer</a></li>
                          <li><a href="#">Resume Writer</a></li>
                          <li><a href="#">SEO Expert</a></li>
                          <li><a href="#">Social Media Manager</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Software Developer</a></li>
                          <li><a href="#">Software Engineer</a></li>
                          <li><a href="#">UI Designer</a></li>
                          <li><a href="#">Technical Writer</a></li>
                          <li><a href="#">UX Designer</a></li>
                          <li><a href="#">Virtual Assistant</a></li>
                          <li><a href="#">Web Designer</a></li>
                          <li><a href="#">Wordpress Developer</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  :
                  null
              }
            </div>

            <div className="col-12">
              {
                tab == 2 ?
                  <div class="tabcontent">
                    <div className="row">
                      <div className="col-3">
                        <ul>
                          <li><a href="#">Software Developer</a></li>
                          <li><a href="#">Software Engineer</a></li>
                          <li><a href="#">UI Designer</a></li>
                          <li><a href="#">Technical Writer</a></li>
                          <li><a href="#">UX Designer</a></li>
                          <li><a href="#">Virtual Assistant</a></li>
                          <li><a href="#">Web Designer</a></li>
                          <li><a href="#">Wordpress Developer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Data Entry Specialists</a></li>
                          <li><a href="#">Video Editors</a></li>
                          <li><a href="#">Data Analyst</a></li>
                          <li><a href="#">Shopify Developer</a></li>
                          <li><a href="#">Ruby on Rails Developer</a></li>
                          <li><a href="#">Android Developer</a></li>
                          <li><a href="#">Bookkeeper</a></li>
                          <li><a href="#">Content Writer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Copywriter</a></li>
                          <li><a href="#">Database Administrator</a></li>
                          <li><a href="#">Data Scientist</a></li>
                          <li><a href="#">Front-End Developer</a></li>
                          <li><a href="#">Game Developer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Java Developer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">JavaScript Developer</a></li>
                          <li><a href="#">Logo Designer</a></li>
                          <li><a href="#">Mobile App Developer</a></li>
                          <li><a href="#">PHP Developer</a></li>
                          <li><a href="#">Python Developer</a></li>
                          <li><a href="#">Resume Writer</a></li>
                          <li><a href="#">SEO Expert</a></li>
                          <li><a href="#">Social Media Manager</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  :
                  null
              }
            </div>

            <div className="col-12">
              {
                tab == 3 ?
                  <div class="tabcontent">
                    <div className="row">
                      <div className="col-3">
                        <ul>
                          <li><a href="#">Data Entry Specialists</a></li>
                          <li><a href="#">Video Editors</a></li>
                          <li><a href="#">Data Analyst</a></li>
                          <li><a href="#">Shopify Developer</a></li>
                          <li><a href="#">Ruby on Rails Developer</a></li>
                          <li><a href="#">Android Developer</a></li>
                          <li><a href="#">Bookkeeper</a></li>
                          <li><a href="#">Content Writer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Copywriter</a></li>
                          <li><a href="#">Database Administrator</a></li>
                          <li><a href="#">Data Scientist</a></li>
                          <li><a href="#">Front-End Developer</a></li>
                          <li><a href="#">Game Developer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Java Developer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">JavaScript Developer</a></li>
                          <li><a href="#">Logo Designer</a></li>
                          <li><a href="#">Mobile App Developer</a></li>
                          <li><a href="#">PHP Developer</a></li>
                          <li><a href="#">Python Developer</a></li>
                          <li><a href="#">Resume Writer</a></li>
                          <li><a href="#">SEO Expert</a></li>
                          <li><a href="#">Social Media Manager</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Software Developer</a></li>
                          <li><a href="#">Software Engineer</a></li>
                          <li><a href="#">UI Designer</a></li>
                          <li><a href="#">Technical Writer</a></li>
                          <li><a href="#">UX Designer</a></li>
                          <li><a href="#">Virtual Assistant</a></li>
                          <li><a href="#">Web Designer</a></li>
                          <li><a href="#">Wordpress Developer</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  :
                  null
              }
            </div>

            <div className="col-12">
              {
                tab == 4 ?
                  <div class="tabcontent">
                    <div className="row">
                      <div className="col-3">
                        <ul>
                          <li><a href="#">Software Developer</a></li>
                          <li><a href="#">Software Engineer</a></li>
                          <li><a href="#">UI Designer</a></li>
                          <li><a href="#">Technical Writer</a></li>
                          <li><a href="#">UX Designer</a></li>
                          <li><a href="#">Virtual Assistant</a></li>
                          <li><a href="#">Web Designer</a></li>
                          <li><a href="#">Wordpress Developer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Data Entry Specialists</a></li>
                          <li><a href="#">Video Editors</a></li>
                          <li><a href="#">Data Analyst</a></li>
                          <li><a href="#">Shopify Developer</a></li>
                          <li><a href="#">Ruby on Rails Developer</a></li>
                          <li><a href="#">Android Developer</a></li>
                          <li><a href="#">Bookkeeper</a></li>
                          <li><a href="#">Content Writer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">Copywriter</a></li>
                          <li><a href="#">Database Administrator</a></li>
                          <li><a href="#">Data Scientist</a></li>
                          <li><a href="#">Front-End Developer</a></li>
                          <li><a href="#">Game Developer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Graphic Designer</a></li>
                          <li><a href="#">Java Developer</a></li>
                        </ul>
                      </div>

                      <div className="col-3">
                        <ul>
                          <li><a href="#">JavaScript Developer</a></li>
                          <li><a href="#">Logo Designer</a></li>
                          <li><a href="#">Mobile App Developer</a></li>
                          <li><a href="#">PHP Developer</a></li>
                          <li><a href="#">Python Developer</a></li>
                          <li><a href="#">Resume Writer</a></li>
                          <li><a href="#">SEO Expert</a></li>
                          <li><a href="#">Social Media Manager</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  :
                  null
              }
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default FindTalent;
