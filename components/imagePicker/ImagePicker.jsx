"use client";

import {useRef, useState} from 'react';
import Image from 'next/image';
import styles from './imagePicker.module.scss';


export default function ImagePicker({ label, name }) {
    const { controls, picker, input, button, preview } = styles;

    const [imagePreview, setImagePreview] = useState(null);

    const imageInputRef = useRef();

    const handlePickClick = () => {
        imageInputRef.current.click();
    };

    const handleImagePreviewChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setImagePreview(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setImagePreview(fileReader.result);
        };
    }

    return (<div className={picker}>
        <label htmlFor={name}>{label}</label>
        <div className={controls}>
            <div className={preview}>
                {imagePreview ? <Image src={imagePreview} alt={'Meal image'} fill/> : <p>No image picked yet/</p>}
            </div>
            <input ref={imageInputRef} type={"file"} id={name} accept={"image/png, image/jpeg"} name={name} className={input} onChange={handleImagePreviewChange} required/>
            <button className={button} type={"button"} onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>)
}