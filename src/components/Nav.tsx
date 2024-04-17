import "@/style/Nav.css"

function Nav() {
    return (
        <>
            <nav id="nav-p">
                <ul className="nav-ul">
                <li className="li-line"><a className="hover:text-gray-500" href="#">О СЕРВИСЕ</a></li>
                <li className="li-line"><a href="#">КАК ПОЛЬЗОВАТЬСЯ</a></li>
                
                <li className="li-line">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.0013 14.0023C33.1135 14.0023 33.2017 14.0023 33.2899 14.0023C38.3056 14.0023 43.3212 13.9956 48.3369 14.005C52.7115 14.013 56.6012 16.6516 58.2321 20.7002C58.7383 21.9569 58.9935 23.2656 58.9975 24.6209C59.0015 26.2081 59.0001 27.7953 58.9975 29.3812C58.9908 34.4346 55.4097 38.8177 50.4461 39.8052C49.6887 39.9558 48.9033 40.0104 48.1286 40.0197C45.8819 40.0477 43.6351 40.0291 41.3884 40.0291C41.2669 40.0291 41.1467 40.0291 40.9877 40.0291C40.9877 43.358 40.9877 46.6684 40.9877 50C38.3082 50 35.6661 50 33 50C33.0013 38.0168 33.0013 26.0295 33.0013 14.0023ZM40.989 32.0211C41.0705 32.0278 41.1226 32.0358 41.1761 32.0358C43.5657 32.0358 45.9553 32.0531 48.345 32.0305C49.861 32.0158 50.9884 30.8364 50.9937 29.3132C50.9991 27.8166 50.9577 26.3174 51.0058 24.8221C51.0538 23.3642 49.9185 21.9623 48.1539 21.9849C45.8872 22.0156 43.6191 21.9929 41.351 21.9929C41.2335 21.9929 41.1159 21.9929 40.9877 21.9929C40.9891 25.3539 40.989 28.6669 40.989 32.0211Z" fill="#131241"/>
    <path d="M29 14.003C29 22.6864 29 31.316 29 39.998C28.8858 39.998 28.7778 39.998 28.6698 39.998C24.0819 39.998 19.494 40.0033 14.9061 39.9966C10.0811 39.9899 5.94381 36.1968 5.14689 31.0524C5.07365 30.5791 5.02151 30.0978 5.01779 29.6191C5.00165 27.8846 4.98924 26.1487 5.01407 24.4142C5.08234 19.618 8.36065 15.3046 12.7313 14.2827C13.4426 14.116 14.1812 14.0192 14.9073 14.0151C19.5052 13.9909 24.103 14.003 28.7021 14.003C28.7927 14.003 28.8833 14.003 29 14.003ZM21.5583 22.0706C21.4677 22.0652 21.4069 22.0585 21.3461 22.0585C19.2085 22.0585 17.071 22.0517 14.9334 22.0625C13.5233 22.0692 12.4508 23.2484 12.4483 24.7705C12.4458 26.2132 12.4818 27.6573 12.4384 29.1001C12.39 30.7284 13.6251 31.9882 15.0575 31.956C17.1219 31.9089 19.1874 31.9439 21.253 31.9439C21.3523 31.9439 21.4503 31.9331 21.5571 31.9277C21.5583 28.6322 21.5583 25.3688 21.5583 22.0706Z" fill="#131241"/>
    </svg>
                </li>
                
                <li className="li-line li-3"><a href="#">ВОЙТИ</a></li>
                <li className="li-line li-3"><a href="#">ЗАРЕГИСТРИРОВАТЬСЯ</a></li>	
                </ul>
            </nav>
	    </>
    )
}

export default Nav
