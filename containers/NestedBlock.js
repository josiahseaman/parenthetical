/**
 * Main functional element of the parenthetical display method.
 * A small [+] sign shows where more text is available.  If clicked, it expands to show
 * all text one level deeper, which may include multiple [+] signs.
 *
 * Additional features: hint at block hidden block size, special case ((double paren commentary)) with
 * darker grey plus sign or diminished icon.
 *
 * Created by josiah on 5/11/2016.
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'


export default class NestedBlock extends Component {

    render() {
        var {label, value} = this.props
        var css = classNames({
            "nested-block": true,
            "expanded": this.state.expanded
        })
        return (
            <div className={css} key={label + '-nested-block'}>
                {value}
            </div>
        )
    }


}