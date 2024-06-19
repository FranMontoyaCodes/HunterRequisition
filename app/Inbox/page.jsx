"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineFileProtect, AiOutlineCheckCircle } from 'react-icons/ai';

const RequestInbox = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    // Simulate fetching requests made by the logged-in user from a database
    const fetchRequests = async () => {
      // Replace with actual API call
      const requestsFromApi = await new Promise((resolve) =>
        setTimeout(() =>
          resolve([
            { id: 1, status: 'in progress', description: 'Request 1' },
            { id: 2, status: 'needs review', description: 'Request 2' },
            { id: 3, status: 'completed', description: 'Request 3' },
          ]), 1000)
      );
      setRequests(requestsFromApi);
    };

    fetchRequests();
  }, []);

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseDetails = () => {
    setSelectedRequest(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Request Inbox</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Requests List */}
        <div className="col-span-2">
          {requests.length === 0 ? (
            <p className="text-lg">No requests found.</p>
          ) : (
            <div className="space-y-4">
              {requests.map((request) => (
                <div key={request.id} className="bg-white p-4 rounded shadow-md cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{request.description}</p>
                    <p className="text-sm capitalize">{request.status}</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => handleViewDetails(request)}
                      className="flex items-center text-blue-500"
                    >
                      <AiOutlineEye className="mr-2" />
                      View Details
                    </button>
                    <button className="flex items-center text-gray-500">
                      <AiOutlineFileProtect className="mr-2" />
                      Non-Editable View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selected Request Details */}
        {selectedRequest && (
          <div className="col-span-1 bg-white p-4 rounded shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold mb-2">{selectedRequest.description}</h2>
              <button onClick={handleCloseDetails} className="text-gray-500">
                Close
              </button>
            </div>
            <div className="flex items-center mb-2">
              <AiOutlineCheckCircle className="text-green-500 mr-2" />
              <p className="capitalize">{selectedRequest.status}</p>
            </div>
            <p>Request ID: {selectedRequest.id}</p>
            {/* Additional details specific to the request */}
            {/* Replace with actual details based on your application's needs */}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestInbox;