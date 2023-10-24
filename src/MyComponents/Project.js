import React from 'react'
import { BsFolderSymlink } from "react-icons/bs";
export default function Project() {
  return (
    <div>
        <section className="works">
            <div className="items">
                <div className="folderLink"><BsFolderSymlink /></div>
                <img className="workimage" src="images/work4.png" alt="drink a coffee"/>
                <div>Cleaning robot</div>
            </div>

            <div className="items">
                <div className="folderLink"><BsFolderSymlink /></div>
                <img className="workimage" src="images/worksp.JPG" alt="drink a coffee"/>
                <div>Cleaning robot</div>
            </div>

            <div className="items">
                <div className="folderLink"><BsFolderSymlink /></div>
                <img className="workimage" src="images/work4.png" alt="drink a coffee"/>
                <div>Cleaning robot</div>
            </div>

            <div className="items">
                <div className="folderLink"><BsFolderSymlink /></div>
                <img className="workimage" src="images/work4.png" alt="drink a coffee"/>
                <div>Cleaning robot</div>
            </div>
        </section>
    </div>
  )
}
