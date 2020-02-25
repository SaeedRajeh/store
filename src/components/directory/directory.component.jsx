import React,{Component} from 'react';
// import component style
import './directory.styles.scss';
// import menu item
import MenuItem from '../menu-item/menu-item.component';
class Directory extends Component{
    // we need construcor
    constructor(){
        // call super to pull all things we from our react component into our class
        super();
        // set our state value
        this.state = {
            // menu items sectios
            sections:[
                {
                    id:1,
                    title:'hats',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png'

                },
                {
                    id:2,
                    title:'jackets',
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png'
                    
                },
                {
                    id:3,
                    title:'sneakers',
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png'

                },
                {
                    id:4,
                    title:'womens',
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large'

                },
                {
                    id:5,
                    title:'mens',
                    imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
                    size:'large'

                }

            ]
        }//end of state
    } //end of constructor
    // render
    render(){
        return(
            <div className="directory-menu">
                {/* map through items */}
                {this.state.sections.map(({id,title,imageUrl,size}) =>(
                    <MenuItem  key = {id} title = {title} imageUrl = {imageUrl} size = {size} />
                ))}
            </div>
        )
    }//end of render
}
export default Directory;