import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE_URL } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ApiData {
  _id: string;
  method: string;
  path: string;
  count: number;
}

const SecondComponent: React.FC = () => {
  const [methodTotals, setMethodTotals] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<{ data: ApiData[] }>(
        `${API_BASE_URL}/api-logs`
      );
      console.log("API Response:", response.data);

      const methodTotals: { [key: string]: number } = {};
      response.data.data.forEach((element) => {
        if (methodTotals[element.method]) {
          methodTotals[element.method] += element.count;
        } else {
          methodTotals[element.method] = element.count;
        }
      });
      setMethodTotals(methodTotals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-start items-center text-center py-2 ps-2">
        <h2>API called counts</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-white">Method</TableHead>
            {Object.entries(methodTotals).map(([method], index) => (
              <TableHead key={index} className="text-white text-opacity-80">
                {method}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold text-white">
              Total Count
            </TableCell>
            {Object.entries(methodTotals).map(( item, index) => (
              <TableCell key={index}>{item[1]}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SecondComponent;
