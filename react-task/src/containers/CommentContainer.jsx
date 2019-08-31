
import Comment from 'components/Comment'

import React, { Component, Fragment } from 'react';
    
    export default class CommentContainer extends Component {
      constructor(props) {
          super(props);
      
          this.state = {
            loading: true, 
            comment: {},
          };
        }

      //methods
      
      componentDidMount () {
        const { match } = this.props
        this.setState ({ loading: true })

        fetch (`https://jsonplaceholder.typicode.com/comments/${ match.params.id }`)
          .then ((response) => response.json ())
          .then ((comment) => {
            
            this.setState ({
              loading: false,
              comment
            })
          })
          .catch (() => { this.setState ({ loading: false }) })
      }

      

      render() {
        const { comment } = this.state

        return (
          <Fragment>
            <Comment name={comment.name} body={comment.body}/> 
          </Fragment>
        )
      }
    }