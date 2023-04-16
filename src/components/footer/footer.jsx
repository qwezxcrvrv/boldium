import './footer.scss';

function Footer() {

    return (
        <div id="footer">
			<div className='mb_flex'>
				<div className="company_info">
					<div className="license">
						<img className="LBP" alt="LBP"></img>
						<p className='lep_paragraph margin_left_small'>We are building practitioners who have been assessed as competent to carry out building work essential to the structure or weathertightness of residential buildings.</p>
					</div>
					{/* <div className="connect">
						<a href="/home" className="twitter">twitter</a>
						<a href="/home" className="facebook">facebook</a>
						<a href="/home" className="googleplus">googleplus</a>
						<a href="/home" className="pinterest">pinterest</a>
					</div> */}
				</div>	
				<hr className="hr_white"></hr>
				<div className="footer_contact">
					<span className='copyright'>&copy; 2023 by Boldium Architecture. All rights reserved.</span>
				</div>	
				
			</div>
		</div>
    );
  }
  
export default Footer;