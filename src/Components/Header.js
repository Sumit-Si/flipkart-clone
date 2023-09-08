import './Header.css';

function Header() {
    return ( 
        // 'Header'
        <div className='border mrBottom'>
            <div className='top-cont'>
                <div>
                    <div className='logo'>
                        <img src="./public/images/flipkartIcon.png" alt='flipkart logo' />
                        <div>
                        <input type='text' placeholder='Search for products,brands and more' />
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div>End</div>
        </div>
     );
}

export default Header;