// as we said the component is the block
// of codes that should be rendered in the 
//  file named app.js  so that they can be dsiplayed to 
// to the screen.

function Top(props){
   return (
      <>
      <div>
      <p>{props.content}</p>
      </div>
      </>
   )

}
export default Top

// props theynare the immutable variables that are passed from the parent component to the child component
// props are passed as the normal arguments in javascript