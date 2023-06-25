import React, { useEffect, useState } from 'react';
import styles from './Pictures.module.css';
import { PictureFileNames } from './PictureFiles'

export default function Pictures(): JSX.Element {
    return (
            <div className={styles.pictures}>
                {PictureFileNames.map(picturePath => 
                    <div>
                        <h3>{ picturePath } A little somethin something</h3>
                        <img src={'./showcase/' + picturePath}
                        width='25%'
                        height='auto'
                        >
                        </img>
                        <hr></hr>
                        <br></br>
                        <br></br>
                    </div>
                )}

            </div>
    );
}

  