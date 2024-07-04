import styles from "./Register.module.css"

const Register = () => {
    return (
        <div>
            <form className={styles.form}>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Running"/>
                    <label class="form-check-label" for="inlineRadio1">Running</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Cycling"/>
                    <label class="form-check-label" for="inlineRadio2">Cycling</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Swimming"/>
                    <label class="form-check-label" for="inlineRadio3">Swimming</label>
                </div>

                <div className="mb-3 col-md-3">
                    <label htmlFor="exampleInputDate" className="form-label">Date</label>
                    <input type="date" className="form-control-sm" id="exampleInputDate" aria-describedby="dateHelp" required/>
                </div>

                <div className="mb-3 col-md-2">
                    <label htmlFor="exampleInputLength" className="form-label">Length (km)</label>
                    <input 
                        type="number" 
                        className="form-control-sm" 
                        id="exampleInputLength" 
                        aria-describedby="lenghtHelp" 
                        required 
                        min="0" 
                        max="999"
                        placeholder="0"
                        onInput={(e) => {
                            if (e.target.value < 0) e.target.value = 0;
                            if (e.target.value > 999) e.target.value = 999;
                        }} 
                    />
                </div>
                
                <div className="mb-3 col-md-2">
                    <label htmlFor="exampleInputHour" className="form-label">Hours</label>
                    <input 
                        type="number" 
                        className="form-control-sm" 
                        id="exampleInputHour" 
                        aria-describedby="hourtHelp" 
                        required 
                        min="0" 
                        max="99" 
                        step="1" 
                        placeholder="00"
                        onInput={(e) => {
                            let value = e.target.value;
                            if (value < 0) value = 0;
                            if (value > 99) value = 99;
                            if (!Number.isInteger(Number(value))) value = Math.floor(value);
                            e.target.value = value;
                        }} 
                    />
                </div>

                <div className="mb-3 col-md-2">
                    <label htmlFor="exampleInputMinute" className="form-label">Minutes</label>
                    <input 
                        type="number" 
                        className="form-control-sm" 
                        id="exampleInputMinute" 
                        aria-describedby="minutetHelp" 
                        required 
                        min="0" 
                        max="59" 
                        step="1" 
                        placeholder="00"
                        onInput={(e) => {
                            let value = e.target.value;
                            if (value < 0) value = 0;
                            if (value > 59) value = 59;
                            if (!Number.isInteger(Number(value))) value = Math.floor(value);
                            e.target.value = value;
                        }} 
                    />
                </div>

                <div className="mb-3 col-md-2">
                    <label htmlFor="exampleInputSecond" className="form-label">Seconds</label>
                    <input 
                        type="number" 
                        className="form-control-sm" 
                        id="exampleInputSecond" 
                        aria-describedby="secondtHelp" 
                        required 
                        min="0" 
                        max="59" 
                        step="1" 
                        placeholder="00"
                        onInput={(e) => {
                            let value = e.target.value;
                            if (value < 0) value = 0;
                            if (value > 59) value = 59;
                            if (!Number.isInteger(Number(value))) value = Math.floor(value);
                            e.target.value = value;
                        }} 
                    />
                </div>

                <div className="mb-3 col-md-2">
                    <label htmlFor="exampleInputEnergy" className="form-label">Energy (kcal)</label>
                    <input 
                        type="number" 
                        className="form-control-sm" 
                        id="exampleInputEnergy" 
                        aria-describedby="energytHelp" 
                        min="0" 
                        max="99999" 
                        step="1" 
                        placeholder="000"
                        onInput={(e) => {
                            let value = e.target.value;
                            if (value < 0) value = 0;
                            if (value > 99999) value = 99999;
                            if (!Number.isInteger(Number(value))) value = Math.floor(value);
                            e.target.value = value;
                        }} 
                    />
                </div>

                <div className="mb-3 col-md-2">
                    <label htmlFor="exampleInputFrequency" className="form-label">Frequency (bpm)</label>
                    <input 
                        type="number" 
                        className="form-control-sm" 
                        id="exampleInputFrequency" 
                        aria-describedby="frequencytHelp" 
                        min="0" 
                        max="220" 
                        step="1" 
                        placeholder="000"
                        onInput={(e) => {
                            let value = e.target.value;
                            if (value < 0) value = 0;
                            if (value > 99999) value = 99999;
                            if (!Number.isInteger(Number(value))) value = Math.floor(value);
                            e.target.value = value;
                        }} 
                    />
                </div>

                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;