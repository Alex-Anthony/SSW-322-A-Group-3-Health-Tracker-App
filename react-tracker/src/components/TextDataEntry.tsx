import { useState } from 'react'

interface TDEProps {
    label: string;
    initialValue: string | undefined;
}

const TextDataEntry = ({ label, initialValue }: TDEProps) => {
    const [data, setData] = useState(initialValue);

    return (
        <label className="input input-bordered flex items-center gap-2">
            {label}
            <input type="text" className="grow" placeholder={"Enter " + label} value={data} onChange={(e) => setData(e.target.value)} />
        </label>

    )
}

export default TextDataEntry
