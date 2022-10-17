import React from 'react';
import ReactDOM from 'react-dom/client';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {dataimg} from './Images';
import { render } from '@testing-library/react';


function Header() {
 return ( 
  <header>
    <div id="logo">Your Logo</div>
		<nav>
			<div>Home</div>
			<div>About</div>
			<div>Servicing</div>
			<div>Portfolio</div>
			<div>Blog</div>
			<div>Contact us</div>
			<img src="лупа.png" />
		</nav>
  </header>
  );
}
function Main(){
  return (
      <main>
        <h1>WEB development project</h1>
			  <p>Very suitable to support all web development projects</p>
			  <div className="main_element">
				  <div className="development_elements">OUR SERVICES</div>
				  <div className="development_elements">HIRE IS NOW</div>
			  </div>	
			  <div id="image_pointer" className="button_cursor"></div>	
      </main>
  );
}
function Main2(){
  return(
    <div id="main2">
			<h1>About Us</h1>
			<p>Lorem ipsum dolor sir amet,consectetur adipisicing  elit,sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,</p>
			<div id="content1">
				<div>	
					<img src="images.png" />
					<p className="p1">Awesome Icons</p>
					<p>
						Lorem ipsum dolor sit amet, con-<br />sectetur adipisicing elit,sed do<br /> eiusmod tempor 
					</p>
				</div>		
				<div>	
					<img src="images.png" />
					<p className="p1">One Page</p>
					<p>
						Lorem ipsum dolor sit amet, con-<br />sectetur adipisicing elit,sed do<br /> eiusmod tempor 
					</p>
				</div>
				<div>
					<img src="images.png" />
					<p className="p1">Fully Responsive</p>
					<p>
						Lorem ipsum dolor sit amet, con-<br />sectetur adipisicing elit,sed do<br /> eiusmod tempor 
					</p>	
				</div>
			</div>			
		</div>
  );
}
function Main3(){
  return(
    <div id="main3">
			<h1>Our Services</h1>
			<p>Lorem ipsum dolor sit amet,consectetur adipisicing</p>
			<div id="content2">
				<div className="Service">
					<img src="image1.png" />
					<h3>
						Research
					</h3>
					<p>
						At vero eos et accusamus et iusto<br /> odio dignissimos ducimus qui blan-<br />ditiis praesentium voloptatum iti<br />atque corrupti quos.  
					</p>
					<p className="Service_p" id="Service_p1">READ MORE</p>
				</div>
				<div className="Service" >
					<img src="image1.png" />
					<h3>
						Portfolio
					</h3>
					<p>
						At vero eos et accusamus et iusto<br /> odio dignissimos ducimus qui blan-<br />ditiis praesentium voloptatum iti<br />atque corrupti quos.  
					</p>
					<p className="Service_p" id="Service_p2">READ MORE</p>
				</div>
				<div className="Service" >
					<img src="image1.png" />
					<h3>
						Support
					</h3>
					<p>
						At vero eos et accusamus et iusto<br /> odio dignissimos ducimus qui blan-<br />ditiis praesentium voloptatum iti<br />atque corrupti quos.  
					</p>
					<p className="Service_p" id="Service_p3">READ MORE</p>
				</div>
				<div className="Service" >
					<img src="image1.png" />
					<h3>
						Documentation
					</h3>
					<p>
						At vero eos et accusamus et iusto<br /> odio dignissimos ducimus qui blan-<br />ditiis praesentium voloptatum iti<br />atque corrupti quos.  
					</p>
					<p className="Service_p" id="Service_p4">READ MORE</p>
				</div>
				<div className="Service" >
					<img src="image1.png" />
					<h3>
						Development
					</h3>
					<p>
						At vero eos et accusamus et iusto<br /> odio dignissimos ducimus qui blan-<br />ditiis praesentium voloptatum iti<br />atque corrupti quos.  
					</p>
					<p className="Service_p" id="Service_p5">READ MORE</p>
				</div>
				<div className="Service" >
					<img src="image1.png" />
					<h3>
						Design
					</h3>
					<p>
						At vero eos et accusamus et iusto<br /> odio dignissimos ducimus qui blan-<br />ditiis praesentium voloptatum iti<br />atque corrupti quos.  
					</p>
					<p className="Service_p" id="Service_p6">READ MORE</p>
				</div>
			</div>
		</div>
  );
}
const pictures = [
	{
		name:"ALL",
		items:[
			{image:'im.png'},
			{image:'pass.png'},
			{image:'t-shirt.png'},
			{image:'духи.png'},
			{image:'vino.png'},
			{image:'kitch.png'}
		],
	},
	{
		name:"WEB DESIGN",
		items:[
			{image:'im.png'},
			{image:'kitch.png'}
		],
	},
	{
		name:"UI/UX DESIGN",
		items:[
			{image:'духи.png'},
			{image:'vino.png'}
		],
	},
	{
		name:"MOCKUPS",
		items:[
			{image:'pass.png'},
			{image:'t-shirt.png'}
		],
	},
	{
		name:"VIEW ALL",
		items:[
			{image:'im.png'},
			{image:'pass.png'},
			{image:'t-shirt.png'},
			{image:'духи.png'},
			{image:'vino.png'},
			{image:'kitch.png'}
		],
	}
];
function Main4(){
  return(
    <div id="main4">
			<h2>Latest Works</h2>
			<p>
				Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
			</p>
			<div id="content3">
				<div className="works">ALL</div>
				<div className="works">WEB DESIGN</div>
				<div className="works">UI/UX DESIGN</div>
				<div className="works">MOCKUPS</div>
			</div>
			<div id="content4">
				<div id="works_image1"  className="works_images" />
			</div>
			<p id="all_works" className="works">VIEW ALL</p>	
	</div>
  );
}
function Main5(){
  return(
  <div id="main5">
			<h2>
				Pricing Plan
			</h2>
			<p>
				Lorem ipsum dolor sit amet,consectetur adipisicing elif,sed do elusmod tempor<br />incididunt labore et dolore magna aliqua.Enim ad miim veniam,
			</p>
			<div id="content5">
				<div className="price">
					<h4>Free Trail</h4>
					<p>
						<sup>$</sup>00<sub>per month</sub>
					</p>
					<ul>
						<li>30 Free Trall</li>
						<li>5 Free Projects</li>
						<li>PHP 5 Enabled</li>
						<li>24/7 Suports</li>
					</ul>
					<p className="order" >
						Order Now
					</p>
				</div>
				<div className="price">
					<h4>Basic</h4>
					<p>
						<sup>$</sup>50<sub>per month</sub>
					</p>
					<ul>
						<li>30 Free Trall</li>
						<li>5 Free Projects</li>
						<li>PHP 5 Enabled</li>
						<li>24/7 Suports</li>
					</ul>
					<p className="order" >
						Order Now
					</p>
				</div>
				<div className="price">
					<h4>Ultimates</h4>
					<p>
						<sup>$</sup>99<sub>per month</sub>
					</p>
					<ul>
						<li>30 Free Trall</li>
						<li>5 Free Projects</li>
						<li>PHP 5 Enabled</li>
						<li>24/7 Suports</li>
					</ul>
					<p className="order">
						Order Now
					</p>
				</div>
			</div>
		</div>
  );
}
function Main6(){
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
  return (<>
    <div id="main6">
    <h3>
      Our Team Member
    </h3>
    <p>
      Lorem ipsum dolor sit amet,consectetur adipisicing elif,sed do elusmod tempor<br />incididunt labore et dolore magna aliqua.Enim ad miim veniam,
    </p>
		<Slider {...settings}>
			{dataimg.map((item) => (
				<div className="content6">
				<img src={item.pathimg}  className='photo-employee'/>
				<div className="name_employee">
					<h2>
			 			{item.Name}
					</h2>
					<p>
			 			{item.position}
					</p>
		  		</div>
			  	<div className="social-net"> 
        			<img src={item.social_net.face}  />
        			<img src={item.social_net.twit}  />
        			<img src={item.social_net.messan}  />
      		  	</div>
				</div>	
			))}
		</Slider>	
  </div>
  <div id="main7">
			<h3>
				Blog
			</h3> 
			<p>
				Lorem ipsum dolor sit amet,consectetur adipisicing elif,sed do elusmod tempor<br />incididunt labore et dolore magna aliqua.Enim ad miim veniam,
			</p>
			<div id="Blog-content">
				<div className="blog-item"></div>
				<div className="blog-text1">
					<h3>
						Seo Quis Vestibulum
					</h3>
					<div id="text">
						<div className="inside-text">
							<img src="A4.png" /><p>Development</p>
						</div>
						<div className="inside-text">	
							<img src="calendar.png" /><p>14.07.2017</p>
						</div>	
					</div>		
					<p>
						Lorem ipsum dolor sit amet,consectetur adipisicing elif,sed do elusmod tempor<br />incididunt labore et dolore magna aliqua.Enim ad miim veniam,
					</p>
				</div>
			</div>
			<div id="Blog-content">				
				<div className="blog-text1">
					<h3>
						Seo Quis Vestibulum
					</h3>
					<div id="text">
						<div className="inside-text">
							<img src="A4.png" /><p>Development</p>
						</div>
						<div className="inside-text">	
							<img src="calendar.png" /><p>14.07.2017</p>
						</div>	
					</div>		
					<p>
						Lorem ipsum dolor sit amet,consectetur adipisicing elif,sed do elusmod tempor<br />incididunt labore et dolore magna aliqua.Enim ad miim veniam,
					</p>
				</div>
				<div className="blog-item"></div>
			</div>
			<div id="Blog-content">
				<div className="blog-item"></div>
				<div className="blog-text1">
					<h3>
						Seo Quis Vestibulum
					</h3>
					<div id="text">
						<div className="inside-text">
							<img src="A4.png" /><p>Development</p>
						</div>
						<div className="inside-text">	
							<img src="calendar.png" /><p>14.07.2017</p>
						</div>	
					</div>		
					<p>
						Lorem ipsum dolor sit amet,consectetur adipisicing elif,sed do elusmod tempor<br />incididunt labore et dolore magna aliqua.Enim ad miim veniam,
					</p>
				</div>
			</div>
		</div>
 </> 
  );
}
function Form(){
  return(
    <form>
		<input type='text' name='firstname' value="Your NAME" id="Yname" />
		<input type='text' name='email' value="Your EMAIL" id="YEmail" />
		<input type='text' name='message' value="Write Message" id="info"/>
		<input type="button" value="SEND" id="Send_button" />				
	</form>
  );
}
function Main7(){
  return (
	<div id="main8">
		<div className='dark_block'>
			<div className='content9'>
			<h2>Contact Us</h2>
			<p>
				Lorem ipsum dolor sit amet,consectetur adipisicing elif,sed do elusmod tempor<br />incididunt labore et dolore magna aliqua.Enim ad miim veniam,
			</p>
			<div id="content8">
				<img src="gps.png" />
				<img src="phone.png" />
				<img src="email.png" />
			</div>
			<div id="Contact_info">
				<p id="location">
					Nobinagar savar,Ohaka<br />Bangladesh
				</p>
				<p id="number">
					+8801743831996<br />+880192873807
				</p>
				<p id="mail">
					quickmausd@gmail.com<br />quickmasud@yahoo.com
				</p>
			</div>
      		<Form />
			</div>
		</div>
	</div>
);
}
function Footer(){
  return(
    <footer>
    <p>
      All rights Reserved  2017
    </p>
  </footer>
  );
}
function Content(){
  return (
  <>
    <Header />
    <Main />
    <Main2 />
    <Main3 />
    <Main4 />
    <Main5 />
    <Main6 />
    <Main7 />
    <Footer />
  </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<Content />);