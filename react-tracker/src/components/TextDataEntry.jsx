import { useState } from 'react'


const TextDataEntry = ({ label, initialValue }) => {
    const [data, setData] = useState(initialValue);

    return (
        <label className="input input-bordered flex items-center gap-2">
            {label}
            <input type="text" className="grow" placeholder={"Enter " + label} value={data} onChange={(e) => setData(e.target.value)} />
        </label>

    )
}

export default TextDataEntry
