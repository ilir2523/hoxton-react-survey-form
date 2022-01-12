import { useState } from "react";

const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: []
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState(initialForm)

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}

      </section>
      <section className="main__form">{/* a form should be here */}
        <form className="form"
          onSubmit={(e) => {
            e.preventDefault()
            console.log(formData)
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="It's yellow!"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.bestFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  It's yellow!
                </label>
              </li>

              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="It squeaks!"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      // const newFormData = { ...formData, bestFeatures: [e.target.value] }
                      // setFormData(newFormData)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.bestFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  It squeaks!
                </label>
              </li>

              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="It has a logo!"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.bestFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  It has a logo!
                </label>
              </li>

              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="Its big"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.bestFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  Its big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio" >
            <h3>What would you say that are the worst bits of your rubber duck?
            <ul>
              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="It's yellow!"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.worstFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  It's yellow!
                </label>
              </li>

              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="It squeaks!"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      // const newFormData = { ...formData, worstFeatures: [e.target.value] }
                      // setFormData(newFormData)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.worstFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  It squeaks!
                </label>
              </li>

              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="It has a logo!"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.worstFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  It has a logo!
                </label>
              </li>

              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="Its big"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.worstFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  Its big!
                </label>
              </li>
            </ul>
            </h3>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?
              <ul>
                <li>
                  <input id="consistency1" type="radio" name="consistency" value="1"
                    onClick={(e) => {
                      const newFormData = { ...formData, consistency: e.target.value }
                      setFormData(newFormData)
                    }}
                  /><label htmlFor="consistency1">1</label>
                </li>
                <li>
                  <input id="consistency2" type="radio" name="consistency" value="2"
                    onClick={(e) => {
                      const newFormData = { ...formData, consistency: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="consistency2">2</label>
                </li>
                <li>
                  <input id="consistency3" type="radio" name="consistency" value="3"
                    onClick={(e) => {
                      const newFormData = { ...formData, consistency: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="consistency3">3</label>
                </li>
                <li>
                  <input id="consistency4" type="radio" name="consistency" value="4"
                    onClick={(e) => {
                      const newFormData = { ...formData, consistency: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="consistency4">4</label>
                </li>
              </ul>
            </h3>

          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?
              <ul>
                <li>
                  <input id="colour1" type="radio" name="colour" value="1"
                    onClick={(e) => {
                      const newFormData = { ...formData, colour: e.target.value }
                      setFormData(newFormData)
                    }}
                  /><label htmlFor="colour1">1</label>
                </li>
                <li>
                  <input id="colour2" type="radio" name="colour" value="2"
                    onClick={(e) => {
                      const newFormData = { ...formData, colour: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="colour2">2</label>
                </li>
                <li>
                  <input id="colour3" type="radio" name="colour" value="3"
                    onClick={(e) => {
                      const newFormData = { ...formData, colour: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="colour3">3</label>
                </li>
                <li>
                  <input id="colour4" type="radio" name="colour" value="4"
                    onClick={(e) => {
                      const newFormData = { ...formData, colour: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="colour4">4</label>
                </li>
              </ul>
            </h3>

          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?
              <ul>
                <li>
                  <input id="logo1" type="radio" name="logo" value="1"
                    onClick={(e) => {
                      const newFormData = { ...formData, logo: e.target.value }
                      setFormData(newFormData)
                    }}
                  /><label htmlFor="logo1">1</label>
                </li>
                <li>
                  <input id="logo2" type="radio" name="logo" value="2"
                    onClick={(e) => {
                      const newFormData = { ...formData, logo: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="logo2">2</label>
                </li>
                <li>
                  <input id="logo3" type="radio" name="logo" value="3"
                    onClick={(e) => {
                      const newFormData = { ...formData, logo: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="logo3">3</label>
                </li>
                <li>
                  <input id="logo4" type="radio" name="logo" value="4"
                    onClick={(e) => {
                      const newFormData = { ...formData, logo: e.target.value }
                      setFormData(newFormData)
                    }}
                  />
                  <label htmlFor="logo4">4</label>
                </li>
              </ul>
            </h3>

          </div>
          <div className="form__group radio">
            <h3>How do you like to spend time with your rubber duck?
            <ul>
              <li>
                <label>
                  <input name="timeSpent" type="checkbox" value="swimming"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.timeSpent.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  Swimming
                </label>
              </li>

              <li>
                <label>
                  <input name="timeSpent" type="checkbox" value="bathing!"
                    onClick={(e) => {

                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.timeSpent.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  Bathing!
                </label>
              </li>

              <li>
                <label>
                  <input name="timeSpent" type="checkbox" value="chatting"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.timeSpent.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  Chatting
                </label>
              </li>

              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="noTime"
                    onClick={(e) => {
                      // console.log(e.target.value)
                      const newFormData = JSON.parse(JSON.stringify(formData))
                      newFormData.bestFeatures.push(e.target.value)
                      setFormData(newFormData)
                    }}
                  />
                  I don't like to spend time with it!
                </label>
              </li>
            </ul>
            </h3>
          </div>

          <label>What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            onChange={(e) => {
              const newFormData = { ...formData, review: e.target.value }
              setFormData(newFormData)
            }}
          ></textarea>
          </label>

          <label>
            Put your name here (if you feel like it):<input
              type="text"
              name="username"
              onChange={(e) => {
                const newFormData = { ...formData, username: e.target.value }
                setFormData(newFormData)
              }}
            />
          </label>
          <label>
            Leave us your email pretty please??<input
              type="email"
              name="email"
              onChange={(e) => {
                const newFormData = { ...formData, email: e.target.value }
                setFormData(newFormData)
              }}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  )
}

export default Main
