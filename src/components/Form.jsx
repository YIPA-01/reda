import {useForm} from "react-hook-form";



function  Form (){
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm(
        {
            defaultValues : {
                username : "",
                email : "",
                createdAt : "",
                admin : true
            }
        }
    );

    return(
        <form className="flex flex-col mt-10 bg-white px-4 py-5 shadow rounded-lg sm:m-6 sm:p-6 w-full lg:w-3/6 text-gray-600"
            onSubmit={handleSubmit((d) => console.log(d))} >
            <div className="flex flex-col mt-4" >
                <label htmlFor="username">Username</label>
                <input className="mt-2  border-solid border-gray-300 border py-2 px-4  rounded focus:outline-none focus:ring focus:ring-purple-500"
                    id="username" {...register('username',
                {    required:true,
                            validate :{
                                minLength: (v) => v.length >= 5 || "The username should have at least 5 characters",
                                matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v)
                    }
                })}/>

                {errors.username?.type === "required" && (
                    <small className=" pt-2 text-base font-semibold italic leading-7 text-red-700">Username is required</small>
                )}
                {errors.username?.message && (
                    <small className="pt-2 text-base font-semibold italic leading-7 text-red-700">{errors.username.message}</small>
                )}

                {errors.username?.type === "matchPattern" && (
                    <small className="pt-2 text-base font-semibold italic leading-7 text-red-700">Username must contain only letters, numbers and _</small>
                )}
            </div>

            <div className="flex flex-col mt-4">
                <label htmlFor="email">Email</label>
                <input className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
                    id="email" {...register('email',
                    {
                        required : "email is required",
                        validate: {
                            maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
                            pattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address"
                    }})} />
                {errors.email?.message && (
                    <small className="pt-2 text-base font-semibold italic leading-7 text-red-700">{errors.email.message}</small>
                )}

            </div>

            <div className="mt-4" >
                <label
                    htmlFor="isAdmin">IsAdmin</label>
                <input
                    className="ml-2"
                    id="isAdmin"
                    type="checkbox"
                    {...register('isAdmin')}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label htmlFor="createdAt">Creation Date</label>
                <input className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
                    id="createdAt"
                    type="date"
                    {...register('createdAt')}
                />
            </div>

            <div className="mt-4">
                <label htmlFor="male">male</label>
                <input className="ml-2"
                    id="male" type="radio" value="male" name="gender" {...register("gender",
                    {
                        required: "Please choose a gender"
                    }
                )} />
                <label className="ml-4" htmlFor="female">female</label>
                <input className="ml-2"
                    id="female" type="radio" value="female" name="gender" {...register("gender",
                    {
                        required: "Please choose a gender"
                    }
                )} />
                {errors.gender?.message && (
                    <small className=" ml-4 pt-8 text-base font-semibold italic leading-7 text-red-700">{errors.gender.message}</small>
                )}
            </div>

            <div className="flex flex-col mt-4">
                <label htmlFor="hobbies">Hobbies</label>
                <select className=" border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
                    id="hobbies" {...register("hobbies",
                    {required: "please choose a hobby"}
                )}>
                    <option value="" >...</option>
                    <option value="travel">travel</option>
                    <option value="sports">sports</option>
                    <option value="reading">reading</option>
                </select>
                {errors.hobbies?.message && (
                    <small className="pt-2 text-base font-semibold italic leading-7 text-red-700">{errors.hobbies.message}</small>
                ) }
            </div>
            <div className="flex flex-col mt-4">
                <label htmlFor="cv">C.V</label>
                <input className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
                    id="cv" type="file" {...register('cv',
                    {required : 'please enter a file',
                            validate: {lessThan30Kb: (file)=>file?.size > 1000000 || "file size must be less than 30Kb"}
                    }
                )} />
                {errors.cv?.message && (
                    <small className="pt-2 text-base font-semibold italic leading-7 text-red-700">{errors.cv.message}</small>
                )}
            </div>

            <button  className="bg-purple-600 p-3 mt-12 rounded-lg text-white font-medium m-auto w-3/6 hover:opacity-75"
                type="submit">Submit</button>
        </form>

    )
}

export default Form;
