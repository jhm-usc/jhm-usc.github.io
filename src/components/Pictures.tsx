import React, { useEffect, useState } from 'react';
import styles from './Pictures.module.css';
import { PictureFileNames } from './PictureFiles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Pictures(): JSX.Element {
    return (
            <div className={styles.pictures}>
                {PictureFileNames.map((picturePath, index) => 
                    <div key={index}>
                        <h3>{ index + 1 }: A little somethin something</h3>
                        <div>
                            <LazyLoadImage 
                                src={'./showcase/' + picturePath}
                                width='500px'
                                height='auto'
                                effect='blur'
                            />
                        </div>
                        <p>Caption or something maybe add here</p>
                        <hr></hr>
                        <br></br>
                        <br></br>
                    </div>
                )}

            </div>
    );
}

  