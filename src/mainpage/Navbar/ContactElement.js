import "./Navbar.css";

function ContactElement ({hideInformation, toggleInformation}) {

    return(<>

        <div onClick={toggleInformation} className={`dim-overlay ${hideInformation ? 'fade-out' : 'fade-in'}`}/>

        <div id="information" className={` ${hideInformation ? 'slide-out' : 'slide-in'}`}>


          <div className='first-row'>
            <h5 className="cu-1">Contact Us</h5>
            <i className="bi bi-x" onClick={toggleInformation}/>
          </div>

          <p className="cu-2">Wherever you are, Noble Nests customer service advisors will be delighted 
          to assist you.</p>

          <div className='other-row'>
            <i className="bi bi-telephone" style={{ marginRight: '20px', cursor: 'pointer'}}/>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Phone Number</p>
          </div>

          <div className='other-row'>
            <i className="bi bi-envelope" style={{ marginRight: '20px', cursor: 'pointer'}}/>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Contact us by e-mail</p>
          </div>

          <div className='other-row'>
            <h5 style={{fontFamily: 'Georgia, Helvetica, Times New Roman, Times, serif'}}>Need help?</h5>
          </div>

          <div className='other-row'>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Your questions</p>
          </div>

          <div className='other-row'>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>After-sales service</p>
          </div>

          <div className='other-row'>
            <p style={{fontWeight: 'bolder', cursor: 'pointer'}}>Stores</p>
          </div>
        
        </div>
    
    </>)
}

export default ContactElement;