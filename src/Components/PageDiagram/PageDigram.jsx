import React from "react";
import PageDiagramSector from './PageDiagramSector/PageDiagramSector';
import styles from './PageDigram.module.css';

const PageDiagram = (props) => {

    let sectorShift = 0;

    let PageDiagramSectorElements = props.state.positions.map(p => {
        let sectorPercents = p.positionQuantity / props.state.totalQuantity * 100;
        let sector = <PageDiagramSector sectorPercents={sectorPercents} sectorShift={sectorShift}
        sectorName={p.positionName} sectorColor={p.positionColor} dispatch={props.dispatch} key={p.id} />;
        sectorShift += sectorPercents;
        return sector;
    })

    return (props.state.totalQuantity ? <div className={styles.pageDiagram}>
        Total quantity: {props.state.totalQuantity}
        <div className={styles.sectorName}>
            {props.state.sectorName ? "Sector name: " + props.state.sectorName : ''}
        </div>
        <div className={styles.canvas}>
            <svg className={styles.chart} viewBox="0 0 50 50">
                {PageDiagramSectorElements}
            </svg>
        </div>
    </div> : <h1 className={styles.warningAboutEmptyPositions}>Enter the quantity of at least one item</h1>)
}

export default PageDiagram;