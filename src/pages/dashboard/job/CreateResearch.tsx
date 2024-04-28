import {FormControlLabel, Switch, TextField} from "@mui/material";
import {useRef, useState} from "react";
import {Editor} from "@tinymce/tinymce-react";
import {Editor as TinyMCEEditor} from "tinymce";
import axios from "axios";
import {useAuthInfo} from "@propelauth/react";

export const CreateResearch = () => {
    const editorRef = useRef<TinyMCEEditor | null>(null);
    const authInfo = useAuthInfo();
    const [createSuccess, setCreateSuccess] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        money: '',
        location: '',
        univercity: '',
        isfulltime: false,
        description: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleEditorChange = () => {
        if (editorRef.current) {
            setFormData({
                ...formData,
                description: editorRef.current.getContent()
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post(
                `${import.meta.env.VITE_APP_BACKEND_URL}/research/create`,
                {
                    Research: {
                        ...formData

                    }
                },
                {
                    headers: {Authorization: `Bearer ${authInfo.accessToken}`}
                }
            );

            setCreateSuccess(true)
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="container mx-auto max-w-lg space-y-4">
            {createSuccess && (
                <div className="bg-green-100 text-green-500 rounded-3xl p-4">
                    Research created successfully
                </div>
            )}
            <h1 className="text-2xl font-bold">Create Research</h1>
            <form className="space-y-5"
                  onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Research Title"
                    variant="outlined"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />

                <Editor
                    apiKey="b4bz61z0lpmf3j3k1u8z3fqbs8tjoci5o6cwhoq0tytl1uws"
                    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    onInit={(_evt, editor) => editorRef.current = editor}
                    initialValue="<p>Fill your research description</p>"
                    init={{
                        height: 300,
                        menubar: false,
                        setup: editor => {
                            editor.on('Change', handleEditorChange);
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Salary/M"
                    type="number"
                    variant="outlined"
                    name="money"
                    value={formData.money}
                    onChange={handleInputChange}
                />

                <TextField
                    fullWidth
                    label="Location"
                    variant="outlined"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                />

                <TextField
                    fullWidth
                    label="University"
                    variant="outlined"
                    name="univercity"
                    value={formData.univercity}
                    onChange={handleInputChange}
                />


                <div className={'flex justify-between'}>
                    <FormControlLabel
                        control={<Switch checked={formData.isfulltime}
                                         onChange={handleInputChange}
                                         name="isfulltime"/>}
                        label="Fulltime"
                    />

                    <button className="hover:bg-cyan-500 hover:text-white rounded-3xl px-5 py-1 outline">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

