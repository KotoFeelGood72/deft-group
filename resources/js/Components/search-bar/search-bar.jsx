
import { Link } from '@inertiajs/react';
import React, { useState, useEffect, forceUpdate } from 'react';
import { Collapse, Button, Dropdown, Form, Spinner, InputGroup } from 'react-bootstrap';
import { clearSearchBar, editDropdown, editIdAndPrice, editCheckboxes, isOpenOptions } from '@/reduxSlice/searchBarSlice/searchBarSlice';
import { searchItems } from '@/reduxSlice/filterDataSlice/filterDataSlice';
import { useDispatch } from 'react-redux';

import ErrorMessage from '../error-message/ErrorMessage';

// redux
import { useSelector } from 'react-redux';

export default function SearchBar() {
    //для адекватного сброса поля инфраструстура
    const [clickReset, setClickReset] = useState(false);
    // обработка загрузки и ошибки
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //данные для поиска
    const [filterData, setFilterData] = useState();

    //redux
    const [filterItems, setFilterItems] = useState();
    const searchBarStore = useSelector((state) => state.searchBar);
    const dispatch = useDispatch();

    useEffect(() => {
        onBarRequest(searchBarStore);
        dispatch(searchItems(searchBarStore));
    }, [searchBarStore]);

    useEffect(() => {
        setFilterItems(searchBarStore);
        onClickResetFalse();
    }, [searchBarStore]);

    const onBarRequest = (items) => {
        onLoading();
        try {
            setFilterItems(items);
            onLoaded();
        } catch (error) {
            onError();
        }
    }

    const onLoading = () => {
        setLoading(true);
    }

    const onLoaded = () => {
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onClickResetTrue = () => {
        setClickReset(true);
    }

    const onClickResetFalse = () => {
        setClickReset(false);
    }

    const SearchBarContent = () => {
        return (
            <div className="search-bar-content pt-4 px-4 pb-3 shadow mb-5">
                <form className="form search-form" id="search-bar-form">
                    <div className="row row-cols-lg-2 gx-lg-2 gx-xl-4">
                        <div className="col-12 col-lg-9">
                            <div className="row gx-lg-2 gx-xl-4 mb-lg-4">
                                <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        items={filterItems.type}
                                    />
                                </div>
                                <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center">
                                    <DropdownSearchBar
                                        items={filterItems.district}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3 mb-lg-0 align-items-center">
                                    <p className="mb-3 input-title text-center">
                                        Ценовой диапазон, &euro;
                                    </p>

                                    <div className=" price-inputs d-flex flex-nowrap">
                                        <InputGroup className="input-group me-4 me-lg-2 me-xl-3 me-xxl-4 form-inputs">
                                            <InputGroup.Text className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                                от
                                            </InputGroup.Text>
                                            <Form.Control
                                                min={0}
                                                name="priceFrom"
                                                className="form-control border-0 py-2 rounded-pill rounded-start"
                                                type="number"
                                                aria-label="Price"
                                                aria-describedby="basic-addon1"
                                                value={filterItems.priceFrom}
                                                onChange={(e) => dispatch(editIdAndPrice({name: e.target.name, value: e.target.value}))}
                                            />
                                        </InputGroup>
                                        <InputGroup className="input-group form-inputs">
                                            <InputGroup.Text className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                                до
                                            </InputGroup.Text>
                                            <Form.Control
                                                min={0}
                                                name="priceTo"
                                                className="form-control border-0 py-2 rounded-pill rounded-start"
                                                type="number"
                                                aria-label="Price"
                                                aria-describedby="basic-addon1"
                                                value={filterItems.priceTo}
                                                onChange={(e) => dispatch(editIdAndPrice({name: e.target.name, value: e.target.value}))}
                                            />

                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="row flex-nowrap gx-lg-2 gx-xl-4 mb-4">
                                <div className="w-16 col col-lg-7 d-flex flex-column align-items-center">
                                    <DropdownSearchBar
                                        items={filterItems.layout}
                                    />
                                </div>
                                <div className="col col-lg-5 d-flex flex-column align-items-center">
                                    <p className="mb-3 input-title w-50">
                                        ID
                                    </p>
                                    <input name="id"
                                        type="text"
                                        className=" form-inputs id-input form-control rounded-pill py-2"
                                        id="nameInputModal"
                                        placeholder='  _'
                                        value={filterItems.id}
                                        onChange={(e) => dispatch(editIdAndPrice({name: e.target.name, value: e.target.value}))}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Collapse in={filterItems.isOpened}>
                        <div id="adv-options" className="row row-cols-2 gx-lg-2 gx-xl-4">
                            <div className="col-12 col-lg-9">
                                <div className="row gx-lg-2 gx-xl-4 mb-4">
                                    <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center align-items-center">
                                        <DropdownSearchBar
                                            items={filterItems.distance}
                                        />
                                    </div>
                                    <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center align-items-center">
                                        <DropdownSearchBar
                                            items={filterItems.area}
                                        />
                                    </div>
                                    <div className="w-16 col-6 col-lg d-flex flex-column align-items-center align-items-center">
                                        <DropdownSearchBar
                                            items={filterItems.advantages}
                                        />
                                    </div>
                                    <div className="w-16 col-6 col-lg d-flex flex-column align-items-center align-items-center">
                                        <DropdownSearchBar
                                            items={filterItems.yearBuild}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3">
                                <div className="row flex-nowrap gx-lg-2 gx-xl-4 mb-2 mb-lg-4">
                                    <div className="w-16 col-12 col-lg d-flex flex-column align-items-center align-items-center">
                                        <DropdownRadiosSearchBar
                                            item={filterItems.infrastructure}
                                            resetState={clickReset}
                                            onClickResetFalse={onClickResetFalse}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapse>


                    <div className="row align-items-center justify-content-end">

                        <div className='col-12 col-md-auto col-lg-auto mb-3 mb-md-0 justify-content-center d-flex'>
                            <Button
                                onClick={() => dispatch(isOpenOptions())}
                                aria-controls="adv-options"
                                aria-expanded={open}
                                className="adv-opt text-decoration-none me-3"
                                variant="link">
                                    Расширенные параметры
                            </Button>
                        </div>

                        <div className="col-6 col-md-auto col-lg-auto justify-content-center d-flex">
                            <Link className="btn btn-reset-filters my-2 mx-4"
                                href={'./search'}
                                as='button'
                                type="reset"
                                onClick={() => {
                                    onClickResetTrue();
                                    dispatch(clearSearchBar(filterItems.isOpened));
                                }}>
                                    Сбросить фильтр</Link>
                        </div>
                        <div className="col-6 col-md-auto col-lg-auto justify-content-center d-flex">
                            <Link href={'./search'}
                                as='button'
                                className=" btn btn-search py-3 py-lg-3 rounded-pill"
                                >
                                    Поиск
                            </Link>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

    const spinner = (loading) ? <Spinner animation="border" variant="dark"  className='d-flex justify-content-center mx-auto'/> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(loading || error) ? SearchBarContent() : null;

    return (
        <section className="search-bar mt-4">
        <div className="container">
            {spinner}
            {errorMessage}
            {content}

        </div>
    </section>
    )
}

function DropdownSearchBar({items}) {

    const dispatch = useDispatch();

    const {title, dropdownMenuArr, id, defaultValue, activeValue} = items;
    let options = [];

    options.push(<option key={defaultValue + id} value=''>{defaultValue}</option>);
    options.push(dropdownMenuArr.map( (option) => {
        return(
            <option value={option} key={option + id}>{option}</option>
        )
    }));



    return(
        <div key={id} className="w-100 h-100 d-flex flex-column justify-content-between">
            <p className="mb-3 input-title text-center">
                {title}
            </p>
            <select name={title}
                value={activeValue}
                className="form-select form-inputs rounded-pill py-2"
                aria-label="Default select search-form"
                onChange={(e) => dispatch(editDropdown({id: id, value: e.target.value}))}>
                    {options}
            </select>
        </div>
    )
}


function DropdownRadiosSearchBar({item, resetState, onClickResetFalse}) {

    //выбранные параметры
    const [selected, setSelected] = useState({});
    //выбранные пар-ры в одну строку для отображения
    const [selectString, setSelectString] = useState('')

    const {title, dropdownMenuArr} = item;

    //redux
    const searchBarStore = useSelector((state) => state.searchBar);
    const dispatch = useDispatch();

    useEffect(() => {
        onMount(dropdownMenuArr);
        onToggle();
    }, [])

    useEffect(() => {
        onToggle();
    }, [selected])

    useEffect(() => {
        onReset();
    }, [resetState])

    const onMount = (items) => {
        let obj = {}
        items.map(item => {
            obj[item] = false;
        })
        return obj;
    }

    const onSelected = (e) => {
        const newState = {}
        newState[e.value] = e.checked;
        const newSelected = {...selected, ...newState};
        setSelected(newSelected);
        onToggle();
    }

    const onToggle = () => {
        const selectSum = [];
        for (var key in searchBarStore.infrastructureChecked) {
            if (searchBarStore.infrastructureChecked[key].isChecked === true) {
                selectSum.push(searchBarStore.infrastructureChecked[key].name)
            }
        }
        if (selectSum.length < 1) {
            selectSum.push('Выбрать...')
        }
        setSelectString(selectSum.join(', '));
    }

    const onReset = () => {
        if (resetState) {
            setSelected({});
            onClickResetFalse();
        }
    }

    const isChecked = (item) => {
        try {
            if (searchBarStore.infrastructureChecked[item].isChecked) {
                return true
            } else {
                return false
            }
        } catch {
            return false
        }
    }

    return(
        <div className="w-100 h-100 d-flex flex-column justify-content-between">
            <p className="mb-3 input-title text-center">
                {title}
            </p>

            <Dropdown className="">
                <Dropdown.Toggle as='p' variant="none" id="dropdown-basic" className='form-inputs rounded-pill d-flex justify-content-between align-items-center bg-white w-100 d-block py-2 px-3 m-0 overflow-hidden'>
                    {selectString}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        dropdownMenuArr.map((item, i) => {
                            const isCheckedItem = isChecked(item);
                            return (
                                <Form.Check
                                    name={item}
                                    type='checkbox'
                                    id={item}
                                    checked={isCheckedItem}
                                    key={`checkbox-${i}`}
                                    label={item}
                                    value={item}
                                    className='mx-2'
                                    onChange={(event) => {
                                        dispatch(editCheckboxes(event.target.name))
                                        onSelected(event.currentTarget)
                                    }}
                                />
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
