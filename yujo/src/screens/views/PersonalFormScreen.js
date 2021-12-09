import '../styles/PersonalFormScreen.style.css';

function PersonalFormScreen() {
  return (
      <div>
          <div className="form-group">
              <label className="text-start w-100" htmlFor="identification">Identification:</label>
              <input className="form-control" id="identification" />
          </div>
          {/*<div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </select>
          </div>*/}
          {/*<div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
              <select multiple className="form-control" id="exampleFormControlSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </select>
          </div>*/}
          {/*<div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>*/}
      </div>
  );
}

export default PersonalFormScreen;
