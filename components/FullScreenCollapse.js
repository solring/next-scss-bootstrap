import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { Collapse } from 'react-bootstrap'
import { useClickAway } from 'react-use'
import styles from './FullScreenCollapse.module.scss'

function FullScreenCollapse (props) {
  const { toggle, onClose, title} = props;

  const ref = useRef(null)
  useClickAway(ref, (e) => {
    e.stopPropagation()
    onClose()
  }, ['mouseup', 'touchend'])

  return(
    <Collapse in={toggle} className={styles.collapse} data-testid="fs-collapse">
      <div> {/* Essential for Collapse to animate smoothly.*/}
      <div className={styles.wrapper}>

        <div ref={ref}>
          {title &&
            <div className={`${styles.header} bg-light`}>
              <div>{title}</div>
              <button aria-label="close" className="btn btn-close text-dark" onClick={onClose}></button>
            </div>
          }

          <div className={styles.content}>
            {props.children}
          </div>
        </div>

      </div>
      </div>
    </Collapse>
  )
}

FullScreenCollapse.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([
   PropTypes.string,
   PropTypes.object,
  ]),
}

export default FullScreenCollapse

