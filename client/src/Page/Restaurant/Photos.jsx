import React, { useState } from 'react';
import PhotosCollection from '../../Components/restaurant/PhotosCollection';
import ImageViewer from 'react-simple-image-viewer';


const Photos = () => {
    const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/reviews_photos/edf/9554e39c389be4009e557565a6f64edf_1600501501.jpg","https://b.zmtcdn.com/data/reviews_photos/4db/0529d62bfa74fcc3d0773280ef4ff4db_1570693295.jpg","https://b.zmtcdn.com/data/reviews_photos/b5d/ac14b4b549258abb80f546da4474ab5d_1508162363.jpg","https://b.zmtcdn.com/data/pictures/0/250/7477a30e1093f85f0d693bd446c394b0.jpg"]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const openViewer = () => setIsMenuOpen(true);
    const closeViewer = () => setIsMenuOpen(false);
    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={CurrentImg}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}
            <div className="flex flex-wrap gap-2">
            {photos.map((photo) => (
                <PhotosCollection image={photo} openViewer={openViewer} />
            ))}
            </div>
        </>
    );
};

export default Photos;
