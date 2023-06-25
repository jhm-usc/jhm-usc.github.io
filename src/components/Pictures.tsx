import React, { useEffect, useState } from 'react';
import styles from './Pictures.module.css';
import { PictureFileNames } from './PictureFiles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Pictures(): JSX.Element {
    return (
            <div className={styles.pictures}>
                {PictureFileNames.map(picturePath => 
                    <div>
                        <h3>{ picturePath } A little somethin something</h3>
                        <div>
                            <LazyLoadImage src={'./showcase/' + picturePath}
                            width='500px'
                            height='auto'
                            placeholderSrc={'./showcase/' + picturePath}
                            effect='blur'
                            visibleByDefault={true}
                            >
                            </LazyLoadImage>
                        </div>
                        <hr></hr>
                        <br></br>
                        <br></br>
                    </div>
                )}

            </div>
    );
}

  