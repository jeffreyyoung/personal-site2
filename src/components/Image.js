import React from 'react';
let Image = ({className, placeholder, src, alt}) => {
  
  return (
    <figure class="ma0"> 
      <noscript> 
        <img src="${src}" /> 
      </noscript> 
      <img class="lazyload blur-up" data-src={src} src={placeholder} alt={alt}/> 
    </figure>
  )
}

Image.fromPreview = (obj, props) => {
  return (<Image
    src={obj.meta.image}
    alt={obj.meta.imageDescription}
    placeholder={obj.meta.imagePlaceholder}
    {...props}
  />)
}
export default Image;