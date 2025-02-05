import noImage from '../assets/no-image-placeholder-6f3882e0.webp'
const getCroppedImageUrl = (url: string)=>{
    if(!url) return noImage;
    const target = 'media/'
    const mediaIndex = url.indexOf(target) + target.length
    const mediaUrl = url.slice(0, mediaIndex)
    const imageUrl = mediaUrl + 'crop/600/400/' + url.slice(mediaIndex)
    return imageUrl

}


export default getCroppedImageUrl