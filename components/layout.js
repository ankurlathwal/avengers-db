const Layout = ({children}) => {
    return (
        <div className="container">
            {children}
            <footer>
                <div className="row">
                    <div className="col-xs-12 col-6">
                        Marvel Logo and Data provided and owned by the <a className="dead-link" href="https://developer.marvel.com/" target="_blank">Marvel Developer API</a>
                    </div>           
                    <div className="col-xs-12 col-6 text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item">Contact me</li>
                            <li className="list-inline-item"><a className="dead-link" href="https://www.linkedin.com/in/ankurlathwal/" target="_blank">LinkedIn</a></li>
                            <li className="list-inline-item"><a className="dead-link" href="https://github.com/ankurlathwal" target="_blank">Github</a></li>
                            <li className="list-inline-item"><a className="dead-link" href="https://www.facebook.com/ankurlathwal/" target="_blank">Facebook</a></li>
                        </ul>
                    </div>            
                </div>
            </footer>    
        </div>
    )
}

export default Layout;