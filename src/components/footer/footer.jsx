import './footer.scss';

function Footer() {

    return (
        <div id="footer">
			<div className='mb_flex'>
				<div className="connect">
					<a href="/home" className="twitter">twitter</a>
					<a href="/home" className="facebook">facebook</a>
					<a href="/home" className="googleplus">googleplus</a>
					<a href="/home" className="pinterest">pinterest</a>
				</div>
				<p>&copy; 2023 by Boldium Architecture. All rights reserved.</p>
			</div>
		</div>
    );
  }
  
export default Footer;