import React from 'react'
import {api} from '../API/utils'
import styles from 'styled-components';

import { Checkbox } from '../checkbox/Checkbox'
import { ButtonComponent } from '../Button/Button';
import { section_one_checkboxes,
     section_two_checkboxes,
     section_three_checkboxes,
     section_four_checkboxes,
     section_five_checkboxes,
     section_six_checkboxes,
    section_seven_checkboxes,
    section_eight_checkboxes,
    section_nine_checkboxes,
    section_ten_checkboxes,
    section_eleven_checkboxes,
    section_twelve_checkboxes,
    section_thirteen_checkboxes
    } from './CheckboxItems';

class CheckboxForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
        }
    }

   handleChange = (evt) => {
        const item = evt.target.name;
        const isChecked = evt.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

   handleSubmit = (evt) => {
       evt.preventDefault()
       api.post(this.state)
       console.log('onFormSubmit : ', this.state.checkedItems);
    }
    render(){
        //TODO If enough time create a componnet to maintain DRY
    return (
        <FormContainer>
            <h1>The Services that you provide?</h1>
            <FormFieldsContainer onSubmit={this.handleSubmit}>
                <CheckboxContainer>
                    <h4>Please indicate if your organization provides assistance in one or more of the following categories <span>*</span></h4>
                {
                    section_one_checkboxes.map((item) => (
                        <ItemSelection key={item.key}>
                            <label>
                            {item.name}
                                <Checkbox
                                    name={item.name}
                                    checked={this.state.checkedItems.get(item.name)}
                                    onChange={this.handleChange}
                                />
                        </label>
                        </ItemSelection>
                    ))
                }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Does your organization provide any of the following specialized medical services? <span>*</span></h4>
                    {
                        section_two_checkboxes.map((item, idx) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Does your organization provide any of the following integrated/complementary & alternative therapies?<span>*</span></h4>
                    {
                        section_three_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>What military status do you serve?<span>*</span></h4>
                    {
                        section_four_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>What service eras are eligible for your program?<span>*</span></h4>
                    {
                        section_five_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>What military discharge status do you serve?<span>*</span></h4>
                    {
                        section_six_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Does your organization have a hotline?<span>*</span></h4>
                    {
                        section_seven_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Does your organization provide veteran peer-to-peer support?<span>*</span></h4>
                    {
                        section_eight_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Is combat service required to be eligible for your program?<span>*</span></h4>
                    {
                        section_nine_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Does your organization require a DD-214?<span>*</span></h4>
                    {
                        section_ten_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Is disability a requirement to be part of this program?<span>*</span></h4>
                    {
                        section_eleven_checkboxes.map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>Are additional family or household members eligible for this program?<span>*</span></h4>
                    {
                        section_twelve_checkboxes .map((item) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox key={item.key} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <CheckboxContainer>
                    <h4>I would like to receive more information on partnering with Illinois Joining Forces.<span>*</span></h4>
                    {
                        section_thirteen_checkboxes.map((item, idx) => (
                            <ItemSelection key={item.key}>
                                <label>
                                    {item.name}
                                    <Checkbox
                                        key={item.key}
                                        name={item.name}
                                        checked={this.state.checkedItems.get(item.name) || false}
                                        onChange={this.handleChange}
                                        disabled={true}
                                    />
                                </label>
                            </ItemSelection>
                        ))
                    }
                </CheckboxContainer>
                <ButtonComponent title={'Submit'} color={'signup'} />
            </FormFieldsContainer>
        </FormContainer>
    )
    }
}

const FormContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
`

const FormFieldsContainer = styles.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid #000;
    height: auto;
    width: 75%;
    border-radius: 10px;

`

const CheckboxContainer = styles.div`
    text-align: center;
    width: 70%;
    height: 30vh auto;
    border: 2px solid #000;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    elevation: 1;

    h4{
        margin: 5px;
        padding: 5px;
        border-bottom: 1px solid blue;
    }
    span{
        color: red;
    }
`

const ItemSelection = styles.div`
    border: 1px solid #000;
    margin: 5px;
`

export default CheckboxForm;
