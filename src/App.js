
import { useState } from 'react';
import './App.css';

function App() {
  const [link, Setlink] = useState("");
  const [currenlink, SetCurrentlink] = useState("");


  function ChangeUrl(e) {
    Setlink(e.target.value)
  }

  function HandleCurrentLink() {
    SetCurrentlink(link);

  }

  return (
    <>
      <div className='container'>

        <div>
          <h3 className='text-uppercase text-center mt-4 fw-bold header-title'>All in one Downloader</h3>
        </div>
        <div className="d-flex p-3 ">
          <input type="text"
            class="form-control mx-2" name="" id="" aria-describedby="helpId" placeholder="Tempel Url disini"
            onChange={ChangeUrl}
          />
          <a class="btn " href="#" role="button" onClick={HandleCurrentLink}>Download</a>
        </div>
        <iframe id="widgetv2Api" src={`http://convert2mp3s.com/api/widgetv2?url=${currenlink}`} scrolling={"yes"}></iframe>
      </div>
    </>
  );
}

export default App;
