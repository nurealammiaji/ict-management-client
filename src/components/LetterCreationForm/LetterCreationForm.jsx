import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const LetterCreationForm = ({ letter }) => {

    const letterCreationSuccessNotify = () => toast.success('Letter Created Successfully !');
    const letterCreationErrorNotify = () => toast.error('Failed to create letter !');

    const letterTypes = [
        {
            id: 1,
            name: "Incoming"
        },
        {
            id: 2,
            name: "Outgoing"
        },
        {
            id: 3,
            name: "Pending"
        },
    ];

    const letterStatuses = [
        {
            id: 1,
            name: "Action Needed"
        },
        {
            id: 2,
            name: "In Process"
        },
        {
            id: 3,
            name: "Action Done"
        },
    ];

    const letterCreators = [
        {
            id: 1,
            name: "Cpl Majed"
        },
        {
            id: 2,
            name: "LWTR Harun"
        },
        {
            id: 3,
            name: "Snk Arif"
        },
    ];

    const handleLetterAddForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const newLetter = {
            refNo: form.refNo.value,
            letterDate: form.letterDate.value,
            letterTitle: form.letterTitle.value,
            letterTopic: form.letterTopic.value,
            letterStatus: form.letterStatus.value,
            letterType: form.letterType.value,
            letterRemark: form.letterRemark.value,
            letterCreatedBy: form.letterCreatedBy.value,
            letterReceivedBy: form.letterReceivedBy.value,
        }
        console.log(newLetter);
        letterCreationSuccessNotify();
        // letterCreationErrorNotify();
        document.getElementById("add_letter_modal").close();
    };

    const internetPlans = [
        {
            id: 1,
            name: "Basic Pack",
            price: 19,
            remark: { text: "Popular", show: false },
            features: [
                { text: "Up to 100 Mbps download speed", deleted: false },
                { text: "500 GB data usage per month", deleted: false },
                { text: "24/7 customer support", deleted: false },
                { text: "Free installation", deleted: true }
            ]
        },
        {
            id: 2,
            name: "Premium Pack",
            remark: { text: "Most Popular", show: true },
            price: 29,
            features: [
                { text: "Up to 500 Mbps download speed", deleted: false },
                { text: "Unlimited data usage", deleted: false },
                { text: "24/7 customer support", deleted: false },
                { text: "Free installation", deleted: false }
            ]
        }
    ];

    return (
        <div>
            <form onSubmit={handleLetterAddForm} className="bg-base-200 border-base-300 rounded-box border p-4">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='w-full'>
                        <label className="label">Ref No</label>
                        <input type="text" name='refNo' className="input w-full" placeholder="type reference number here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Letter Date</label>
                        <input name='letterDate' type="date" className="input w-full" placeholder="type letter date" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Letter Title</label>
                        <input type="text" name='letterTitle' className="input w-full" placeholder="type letter title here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Letter Topic</label>
                        <input type="text" name='letterTopic' className="input w-full" placeholder="type letter topic here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Letter Status</label>
                        <select name='letterStatus' className='select w-full'>
                            <option value="" className='text-slate-400'>select status</option>
                            {
                                (letterStatuses) &&
                                letterStatuses.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Letter Type</label>
                        <select name='letterType' className='select w-full'>
                            <option value="" className='text-slate-400'>select type</option>
                            {
                                (letterTypes) &&
                                letterTypes.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Letter Created By</label>
                        <select name='letterCreatedBy' className='select w-full'>
                            <option value="" className='text-slate-400'>select creator</option>
                            {
                                (letterCreators) &&
                                letterCreators.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Letter Received By</label>
                        <select name='letterReceivedBy' className='select w-full'>
                            <option value="" className='text-slate-400'>select receiver</option>
                            {
                                (letterCreators) &&
                                letterCreators.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Current Month Due</label>
                        <input name='currentMonthDue' type="text" className="input w-full" placeholder="type current month due" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Last Month Due</label>
                        <input name='lastMonthDue' type="text" className="input w-full" placeholder="type last month due" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Long Term Due</label>
                        <input name='longTermDue' type="text" className="input w-full" placeholder="type long term due" />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button type='submit' className='btn btn-primary w-full'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LetterCreationForm;