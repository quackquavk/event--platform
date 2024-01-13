    import React, { startTransition, useEffect, useState } from "react";
    import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select";
    import { ICategory } from "@/lib/database/models/category.model";
    import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    } from "@/components/ui/alert-dialog";
    import { Input } from "../ui/input";
import { createCategory, getAllCategories } from "@/lib/actions/category.actions";

    type DropDownProps = {
    onChangeHandler?: () => void;
    value?: string;
    };

    const Dropdown = ({ onChangeHandler, value }: DropDownProps) => {
    const [newcategory, setnewcategory] = useState("");
    const [category, setCategories] = useState<ICategory[]>([]);

    const handleAddCategory = () => {
            createCategory({
                categoryName : newcategory.trim(),
            }).then((category)=>{
                setCategories((prevState)=>[...prevState , category])
            }
            )
    };

    useEffect(()=>{
        const getCategories = async () =>{
            const categoryList = await getAllCategories();
             categoryList && setCategories(categoryList as ICategory[])
        }
    },[])
    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field ">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            {category.length > 0 &&
            category.map((category) => (
                <SelectItem
                key={category._id}
                value={category.name}
                className="select-item p-regular-14"
                >
                {category.name}
                </SelectItem>
            ))}

            <AlertDialog>
            <AlertDialogTrigger className="p-medium-15 flex w-full rounded-sm py-3 pl-3 text-primary-500 hover:bg-primary-50 focus:text-primary-500 ">
                Add New Category
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                <AlertDialogTitle>New Category</AlertDialogTitle>
                <AlertDialogDescription>
                    <Input
                    type="text"
                    placeholder="Category name"
                    className="input-field mt-3 "
                    onChange={(e) => setnewcategory(e.target.value)}
                    />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={() => startTransition(handleAddCategory)}
                >
                    Add
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
        </SelectContent>
        </Select>
    );
    };

    export default Dropdown;
