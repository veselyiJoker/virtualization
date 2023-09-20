export interface ISelectItem {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  job?: string;
}

export interface IResponseMeta {
  from: number; // порядковый номер первого возвращаемого элемента
  to: number; // порядковый номер последнего возвращаемого элемента
  total: number; // общее количество данных
};

export interface IResponse {
  data: Array<ISelectItem>;
  meta: IResponseMeta;
};

export interface IUseDataVirtualization {
  itemsCount: number;
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
  scrollContainerElement: HTMLElement | null;
}