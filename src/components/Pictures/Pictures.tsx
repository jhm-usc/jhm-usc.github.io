import React, { useEffect, useState } from 'react';
import styles from './Pictures.module.css';
import { PictureFileNames } from './PictureFiles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Pictures(): JSX.Element {
    const [isLoading, setIsLoading] = useState(true)

    return (
            <div>
                {PictureFileNames.map((picturePath, index) => 
                    <div className={styles.post} key={picturePath}>
                        <h3>{ index + 1 }: A little somethin something</h3>
                        <div>
                            <LazyLoadImage 
                                className={styles.picture}
                                src={'./showcase/' + picturePath}
                                effect='blur'
                                onLoad={() => setIsLoading(false)}
                            />
                        </div>
                        <p>Caption or something maybe add here</p>
                        <hr></hr>
                        <br></br>
                        <br></br>
                        { isLoading && (<h1>image loading</h1>) }
                    </div>
                )}
            </div>
    );
}

  