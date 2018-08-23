import { OnChanges, OnInit, OnDestroy, SimpleChange, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IObservableCollection, ISlickColumn } from './interfaces';
export declare function getOverridableTextEditorClass(grid: SlickGrid): any;
export declare class SlickGrid implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    private _el;
    columnDefinitions: ISlickColumn<any>[];
    dataRows: IObservableCollection<{}>;
    resized: Observable<any>;
    highlightedCells: {
        row: number;
        column: number;
    }[];
    blurredColumns: string[];
    contextColumns: string[];
    columnsLoading: string[];
    showHeader: boolean;
    enableColumnReorder: boolean;
    enableAsyncPostRender: boolean;
    selectionModel: string | Slick.SelectionModel<any, any>;
    plugins: Array<string | Slick.Plugin<any>>;
    enableEditing: boolean;
    topRowNumber: number;
    overrideCellFn: (rowNumber, columnId, value?, data?) => string;
    isCellEditValid: (row: number, column: number, newValue: any) => boolean;
    loadFinished: EventEmitter<void>;
    onContextMenu: EventEmitter<Slick.EventData>;
    onScroll: EventEmitter<Slick.OnScrollEventArgs<any>>;
    onActiveCellChanged: EventEmitter<Slick.OnActiveCellChangedEventArgs<any>>;
    onBeforeEditCell: EventEmitter<Slick.OnBeforeEditCellEventArgs<any>>;
    onCellChange: EventEmitter<Slick.OnCellChangeEventArgs<any>>;
    onFocus(): void;
    rowHeight: number;
    private _rowHeight;
    private _grid;
    private _gridColumns;
    private _columnNameToIndex;
    private _gridData;
    private _resizeSubscription;
    private _gridSyncSubscription;
    constructor(_el: any);
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    enterEditSession(): void;
    endEditSession(): void;
    readonly onSelectedRowsChanged: Slick.Event<Slick.OnSelectedRowsChangedEventArgs<any>>;
    getSelectedRows(): number[];
    getColumnIndex(name: string): number;
    getSelectedRanges(): Slick.Range[];
    registerPlugin(plugin: Slick.Plugin<any> | string): void;
    setActive(): void;
    selection: Slick.Range[] | boolean;
    private initGrid();
    private changeEditSession(enabled);
    private onResize();
    private invalidateRange(start, end);
    private getColumnEditor(column);
    private getFormatter;
    private setupEvents();
    private updateSchema();
    private setCallbackOnDataRowsChanged();
    readonly activeCell: Slick.Cell;
    private renderGridDataRowsRange(startIndex, count);
}
