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
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'hats'
                },
                {
                    id:2,
                    title:'jackets',
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl:'jackets'
                    
                },
                {
                    id:3,
                    title:'sneakers',
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl:'sneakers'

                },
                {
                    id:4,
                    title:'womens',
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    linkUrl:'womens'

                },
                {
                    id:5,
                    title:'mens',
                    imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
                    size:'large',
                    linkUrl:'mens'

                }

            ]
        }//end of state
    } //end of constructor
    // render
    render(){
        return(
            <div className="directory-menu">
                {/* map through items */}
                {this.state.sections.map(({id,...otherSectionProps}) =>(
                    <MenuItem  key = {id}{...otherSectionProps}  />
                ))}
            </div>
        )
    }//end of render
}
export default Directory;