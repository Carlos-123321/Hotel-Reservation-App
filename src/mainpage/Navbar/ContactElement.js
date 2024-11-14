import navbarStyles from './Navbar.module.css';

function ContactElement ({hideInformation, toggleInformation}) {

    return(<>
                      
        <div onClick={toggleInformation} 
        className={`${navbarStyles['dim-overlay']} ${hideInformation ? navbarStyles['fade-out'] : navbarStyles['fade-in']}`}
        />
                  
        <div className={`${navbarStyles['information']} ${hideInformation ? navbarStyles['slide-out'] : navbarStyles['slide-in']}`}>


          <div className={navbarStyles['first-row']}>
            <h5 className={navbarStyles['cu-1']}>Contact Us</h5>
            <i className={`bi bi-x ${navbarStyles['custom-x-icon']}`} onClick={toggleInformation}/>
          </div>

          <p className={navbarStyles['cu-2']}>
            Wherever you are, Noble Nests customer service advisors will be delighted 
          to assist you.
          </p>

          <div className={navbarStyles['other-row']}>
            <i className="bi bi-telephone" style={{ marginRight: '20px', cursor: 'pointer'}}/>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Phone Number</p>
          </div>

          <div className={navbarStyles['other-row']}>
            <i className="bi bi-envelope" style={{ marginRight: '20px', cursor: 'pointer'}}/>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Contact us by e-mail</p>
          </div>

          <div className={navbarStyles['other-row']}>
            <h5 style={{fontFamily: 'Georgia, Helvetica, Times New Roman, Times, serif'}}>Need help?</h5>
          </div>

          <div className={navbarStyles['other-row']}>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Your questions</p>
          </div>

          <div className={navbarStyles['other-row']}>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>After-sales service</p>
          </div>

          <div className={navbarStyles['other-row']}>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Stores</p>
          </div>
        
        </div>
    
    </>)
}

export default ContactElement;